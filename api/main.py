import datetime
import json
from typing import Optional, List
from fastapi import FastAPI, HTTPException, Depends, Request, File, UploadFile, Form, status
from fastapi.responses import JSONResponse, FileResponse
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from models.user import User
from models.settings import Settings
from models.document import Document

from services import database
from services import document_service
from services import files_service
from utils import document_helper

app = FastAPI()

origins = [ "http://localhost", "http://localhost:4200" ]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@AuthJWT.load_config
def get_config():
    return Settings()

# exception handler for authjwt
# in production, you can tweak performance using orjson response
@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message}
    )

@app.get("/")
def read_root():
    return {"Hello": "Alzheimeer"}
    
@app.post('/login')
def login(user: User, Authorize: AuthJWT = Depends()):
    loggedIn = database.login(user.username, user.password)
    print(loggedIn)
    if loggedIn['exists']:
        expires = datetime.timedelta(days=1)
        access_token = Authorize.create_access_token(subject=json.dumps({"id": loggedIn['data']["user_id"], "type": loggedIn['data']["type"]}), expires_time=expires)
        return {"access_token": access_token}
    else:
        return JSONResponse(status_code=401, content="Bad username or password")
        #raise HTTPException(status_code=401, detail="Bad username or password")   

@app.get('/user')
def user(Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    
    current_user = Authorize.get_jwt_subject()

    return {"user": current_user, 'data': 'jwt test works'}
    #json_compatible_item_data = jsonable_encoder(database.get_items())

    #return JSONResponse(content=json_compatible_item_data)

@app.get('/documents')
def get_documents(Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    
    current_user = Authorize.get_jwt_subject()

    return JSONResponse(status_code=200, content=document_service.get_data())

@app.get('/document/{id}')
def get_document(id: str, Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    
    current_user = Authorize.get_jwt_subject()

    return JSONResponse(status_code=200, content=document_service.get_document(id))

@app.post("/document")
def create_document(document: Document, Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    statusCode: int
    content: str
    savedDocument = document_service.save_data(
        document.propertie1, 
        document.propertie2, 
        document.propertie3,
        document.propertie4, 
        document.propertie5, 
        document.propertie6, 
        document.propertie7, 
        document.propertie8, 
        document.propertie9, 
        document.propertie10,
        document.propertie11,
        document.propertie12,
        document.propertie13,
        document.propertie14,
        document.propertie15,
        document.propertie16,
        document.propertie17,
        document.propertie18,
        document.propertie19, 
        )
    if savedDocument["status"] == True:

        if document_helper.create_document(
            savedDocument["id"], 
            document.propertie1, 
            document.propertie2, 
            document.propertie3,
            document.propertie4,
            document.propertie5,
            document.propertie6,
            document.propertie7,
            document.propertie8,
            document.propertie9,
            document.propertie10,
            document.propertie11,
            document.propertie12,
            document.propertie13,
            document.propertie14,
            document.propertie15,
            document.propertie16,
            document.propertie17,
            document.propertie18,
            document.propertie19,
            ):
            statusCode = 200
            content = "Document created"

        else:
            statusCode = 400
            content = "An error ocurred creating the PDF file"


    else:
        statusCode = 400
        content = "An error ocurred saving the document in the datase"

    return JSONResponse(status_code=statusCode, content=content)

@app.put("/document/{id}")
def create_document(id: str, document: Document, Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    statusCode: int
    content: str
    savedDocument = document_service.update_document(
        id,
        document.propertie1, 
        document.propertie2, 
        document.propertie3,
        document.propertie4, 
        document.propertie5, 
        document.propertie6, 
        document.propertie7, 
        document.propertie8, 
        document.propertie9, 
        document.propertie10,
        document.propertie11,
        document.propertie12,
        document.propertie13,
        document.propertie14,
        document.propertie15,
        document.propertie16,
        document.propertie17,
        document.propertie18,
        document.propertie19, 
        )
    if savedDocument["status"] == True:
        
        if document_helper.update_document(
            id,
            document.propertie1, 
            document.propertie2, 
            document.propertie3,
            document.propertie4,
            document.propertie5,
            document.propertie6,
            document.propertie7,
            document.propertie8,
            document.propertie9,
            document.propertie10,
            document.propertie11,
            document.propertie12,
            document.propertie13,
            document.propertie14,
            document.propertie15,
            document.propertie16,
            document.propertie17,
            document.propertie18,
            document.propertie19,
            ):
            statusCode = 200
            content = "Document updated"

        else:
            statusCode = 400
            content = "An error ocurred updating the PDF file"


    else:
        statusCode = 400
        content = "An error ocurred updating the document in the datase"

    return JSONResponse(status_code=statusCode, content=content)
    
@app.get('/pdf/{id}')
def get_documents(id: str):
    #Authorize.jwt_required()
    print("works")
    return FileResponse("assets/"+id+"/modificated_pdf.pdf")
    #current_user = Authorize.get_jwt_subject()

    #return JSONResponse(status_code=200, content=document_service.get_data())

