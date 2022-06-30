import datetime
from email.mime import image
import json
import base64
import os 
from typing import Optional, List
from fastapi import FastAPI, HTTPException, Depends, Request, File, UploadFile, Form, status
from fastapi.responses import JSONResponse, FileResponse
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from typing import List
from pydantic import BaseModel
from models.user import User
from models.settings import Settings
from models.document import Document
import time
from services import database
from services import document_service
from services import files_service
from services import pdf_service
from services import image_service
from services import email_service 

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

class Item(BaseModel):
    id: int
    x: int
    y: int


@app.post("/markers")
def create_document(images: List[UploadFile], canvas1: str = Form(...), canvas2: str = Form(...), canvas3: str = Form(...), canvas4: str = Form(...), 
canvas5: str = Form(...), canvas6: str = Form(...), canvas7: str = Form(...), canvas8: str = Form(...)):
    canvas1 = json.loads(canvas1)
    canvas2 = json.loads(canvas2)
    canvas3 = json.loads(canvas3)
    canvas4 = json.loads(canvas4)
    canvas5 = json.loads(canvas5)
    canvas6 = json.loads(canvas6)
    canvas7 = json.loads(canvas7)
    canvas8 = json.loads(canvas8)

    trckData = database.save_trck_data()
    path = "assets/trck_images/" + str(trckData['id']) + "/"

    print("Below are the properties of the first canvas")
    if canvas1:
        if canvas1 != 'default message':
            for properties in canvas1:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(1, trckData['id'], 150000, 150000)
   
    print("Below are the properties of the second canvas: ")
    
    if canvas2:
        if canvas2 != 'default message 2':
            for properties in canvas2:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(2, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(2, trckData['id'], 150000, 150000)

    if canvas3:
        if canvas3 != 'default message 2':
            for properties in canvas3:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(3, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(3, trckData['id'], 150000, 150000)

    if canvas4:
        if canvas4 != 'default message 2':
            for properties in canvas4:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(4, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(4, trckData['id'], 150000, 150000)

    if canvas5:
        if canvas5 != 'default message 2':
            for properties in canvas5:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else: 
            database.save_trck_markers(5, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(5, trckData['id'], 150000, 150000)

    if canvas6:
        if canvas6 != 'default message 2':
            for properties in canvas6:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(6, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(6, trckData['id'], 150000, 150000)

    if canvas7:
        if canvas7 != 'default message 2':
            for properties in canvas7:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else: 
            database.save_trck_markers(7, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(7, trckData['id'], 150000, 150000)

    if canvas8:
        if canvas8 != 'default message 2':
            for properties in canvas8:
                database.save_trck_markers(properties['id'], trckData['id'], properties['x'], properties['y'])
                print(properties)
        else:
            database.save_trck_markers(8, trckData['id'], 150000, 150000)
    else:
        database.save_trck_markers(8, trckData['id'], 150000, 150000)
    
    counterName = 0
    if files_service.create_folder(path):
        for img in images:
            img.filename = str(counterName) + '.jpg'
            files_service.upload_file(path, img)
            counterName += 1

    return {"message": "ss"}

@app.get("/markers")
def get_trcks_data(Authorize: AuthJWT = Depends()):
    # DONT FORGET ABOUT ADDING THE AUTHENTICATION
    #Authorize.jwt_required()

    trcksData = jsonable_encoder(database.get_trcks_data())

    return JSONResponse(content=trcksData)

@app.get("/markers/{id}")
def get_trcks_data(id: int, Authorize: AuthJWT = Depends()):
    # DONT FORGET ABOUT ADDING THE AUTHENTICATION
    #Authorize.jwt_required()
    print(id)
    trcksData = jsonable_encoder(database.get_trck_data(id))

    return JSONResponse(content=trcksData)

@app.get("/images/{id}")
def get_trcks_data(id: int, Authorize: AuthJWT = Depends()):
    # DONT FORGET ABOUT ADDING THE AUTHENTICATION
    #Authorize.jwt_required()
    path_of_the_directory= './assets/trck_images/' + str(id)
    counter = 0
    images = []
    print("Files and directories in a specified path:")
    for filename in os.listdir(path_of_the_directory):
        counter += 1
        f = os.path.join(path_of_the_directory,filename)
        if os.path.isfile(f):
            print(f)
            with open(f, "rb") as img_file:
                imageb64 = base64.b64encode(img_file.read())
                images.append({"id": counter, "image": imageb64})

    return {"message": images}


@app.get("/trck_pdf/{id}")
def get_trck_pdf(id: int, Authorize: AuthJWT = Depends()):
    # DONT FORGET ABOUT ADDING THE AUTHENTICATION
    #Authorize.jwt_required()

    # Getting the trck data
    #markers = database.get_trck_data(id)

    # List to save all the markers coordinates
    coordinates = []

    # List to saves all the images path
    imagesPath = []
    attachedImagesPath = []

    #path_of_the_directory= './assets/trck_images/' + str(id) + '/pdf_images/'
    pathImages = './assets/trck_images/' + str(id) + '/'

    #for marker in markers:
       #coordinates.append({'canvasID': marker[1], 'x': marker[3], 'y': marker[4]})
       #image_service.drawMarkers(id, coordinates)
        
    #for filename in os.listdir(path_of_the_directory):
        #f = os.path.join(path_of_the_directory,filename)
        #if os.path.isfile(f):
            #imagesPath.append(f)

    for filename in os.listdir(pathImages):
        f = os.path.join(pathImages,filename)
        if os.path.isfile(f):
            attachedImagesPath.append(f)
    
    pdf = pdf_service.add_image(id, attachedImagesPath)

    
    #pdf = pdf_service.add_image(id, img)
    return FileResponse(pdf)
    
@app.get("/trck_send_pdf/{id}")
def get_send_pdf(id):
    path_of_the_directory = './assets/trck_images/' + str(id) + '/pdf/dddddd.pdf'
    email_service.send_email_pdf_figs(path_of_the_directory)
