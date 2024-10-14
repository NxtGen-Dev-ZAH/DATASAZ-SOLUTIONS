from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv, find_dotenv
import os
import openai
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from langchain.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain_openai import ChatOpenAI

load_dotenv(find_dotenv())


app = FastAPI()

# Allow CORS for development purposes
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://datasaz.com/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


openai.api_key = os.getenv("OPENAI_API_KEY")
sender_email = os.getenv("GMAIL_ADDRESS")
sender_password = os.getenv("GMAIL_APP_PASSWORD")
receiver_email = os.getenv("RECEIVER_EMAIL")


def send_email(form_data: ContactForm):
    if not sender_email or not receiver_email:
        print(
            f"Environment variables not set properly: sender_email={sender_email}, receiver_email={receiver_email}"
        )
        raise HTTPException(status_code=500, detail="Email configuration error")

    body = f"""
    You have received a new message from Datasaz website:

    Name: {form_data.name}
    Email: {form_data.email}
    Message: {form_data.message}
    """
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    subject = f"New Contact Form Submission from {form_data.name}"
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.set_debuglevel(1)
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            print("Email sent successfully")

    except smtplib.SMTPException as e:
        print(f"SMTP error: {e}")
        raise HTTPException(status_code=500, detail=f"Error sending email: {e}")
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")


@app.post("/api/contact")
async def submit_contact_form(form: ContactForm, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(send_email, form)
        return {"message": "Form submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {e}")


pdf_path = r"D:\datasaz-solutions\Datasazdoc.pdf"  # Replace with your PDF file path
loader = PyPDFLoader(pdf_path)
documents = loader.load()
print(documents)

# Split the documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=50,
    separators=["\n\n", "\n", "**", "*", ":", "."],
    length_function=len,
)
texts = text_splitter.split_documents(documents)

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(texts, embeddings)
retriever = vectorstore.as_retriever(search_type="similarity", k=2)


# Define the LLM (OpenAI model)
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3,
    streaming=True,
)


system_template = """You are a professional assistant for DataSAZ Solutions, focused solely on providing concise information about the company and its services. Respond in three sentences or fewer, using only details from the provided company data. For questions unrelated to DataSAZ Solutions, politely suggest asking about the company's services or expertise instead. If the information isn't in your current data, simply state that you don't have that specific detail about DataSAZ Solutions.
"""

human_template = """Use the following pieces of context to answer the question at the end.

Context: {context}

Question: {question}"""

chat_prompt = ChatPromptTemplate.from_messages(
    [
        SystemMessagePromptTemplate.from_template(system_template),
        HumanMessagePromptTemplate.from_template(human_template),
    ]
)


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | chat_prompt
    | llm
    | StrOutputParser()
)


class ChatRequest(BaseModel):
    query: str


async def stream_response(query: str):
    async for chunk in rag_chain.astream(query):
        yield chunk


@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        # Log the incoming request
        print(f"Received request: {request.query}")
        print("Streaming response created")
        # Create the streaming response
        return StreamingResponse(
            stream_response(request.query), media_type="text/event-stream"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
