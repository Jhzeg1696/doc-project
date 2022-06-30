from reportlab.pdfgen import canvas
import os
import re
def create_pdf(trckID):
    pdf_file = 'assets/trck_images' + str(trckID) + '/dddddd.pdf'
 
    can = canvas.Canvas(pdf_file)
 
    can.drawString(20, 800, "First Page")
    can.showPage()
 
    can.save()

def create_folder(path):
    exists = os.path.exists(path)

    if not exists:
        os.makedirs(path)
        return True
    
    else:
        return False
 
def add_image(trckID, attachedImagesPath):
 
    from PyPDF2 import PdfFileWriter, PdfFileReader
    import io
    from services import database, image_service
    from PIL import Image

    create_folder('assets/trck_images/' + str(trckID) + '/pdf')
    create_folder('assets/trck_images/' + str(trckID) + '/pdf_images')

    markers = database.get_trck_data(trckID)
    coordinates= []
    for marker in markers:
       coordinates.append({'canvasID': marker[1], 'x': marker[3], 'y': marker[4]})
       image_service.drawMarkers(trckID, coordinates)

    imagesPath= []
    path_of_the_directory= 'assets/trck_images/' + str(trckID) + '/pdf_images/'

    for filename in os.listdir(path_of_the_directory):
        f = os.path.join(path_of_the_directory,filename)
        if os.path.isfile(f):
            imagesPath.append(f)
 
    in_pdf_file = 'og_pdf.pdf'
    out_pdf_file = 'assets/trck_images/' + str(trckID) + '/pdf/dddddd.pdf'
    #img_file = 'assets/trck_images/15/anydesk-sdesarrollo.png'
 
    packet = io.BytesIO()
    can = canvas.Canvas(packet)
    #can.drawString(10, 100, "Hello world")
    x_start = 0
    y_start = 470

    attachedImagesXAxis = 0
    attachedImagesYAxis = 0

    counter = 0
    counterXAxisSecondRow = 0
    counterToLineBreak = 0

    attachedImagesCounter = 0
    atacchedImagesCounterToLineBreak = 0
    atacchedImagesCounterXAxisSecondRow = 0

    for image in imagesPath:
        counterToLineBreak += 1
        if counterToLineBreak > 4:
            can.drawImage(image, x_start + counterXAxisSecondRow, 300, width=140, preserveAspectRatio=True, mask='auto')
            print(image)
            counterXAxisSecondRow += 150
        else:
            can.drawImage(image, x_start + counter, y_start, width=140, preserveAspectRatio=True, mask='auto')
            counter += 150
    attachedImagesPath.sort(key=lambda f: int(re.sub('\D', '', f)))
    for atacchedImage in attachedImagesPath:
        
        atacchedImagesCounterToLineBreak += 1
        if atacchedImagesCounterToLineBreak > 4:
            can.drawImage(atacchedImage, attachedImagesXAxis + atacchedImagesCounterXAxisSecondRow, 200, width=100, height=100, preserveAspectRatio=True, mask='auto')
            atacchedImagesCounterXAxisSecondRow += 125
        else:
            can.drawImage(atacchedImage, attachedImagesXAxis + attachedImagesCounter, 300, width=100, height=100, preserveAspectRatio=True, mask='auto')
            attachedImagesCounter += 125
            
    can.showPage()
    can.showPage()
    can.showPage()
    can.save()
 
    #move to the beginning of the StringIO buffer
    packet.seek(0)
 
    new_pdf = PdfFileReader(packet)
 
    # read the existing PDF
    existing_pdf = PdfFileReader(open(in_pdf_file, "rb"))
    output = PdfFileWriter()
 
    for i in range(len(existing_pdf.pages)):
        page = existing_pdf.getPage(i)
        page.mergePage(new_pdf.getPage(i))
        output.addPage(page)
 
    
    outputStream = open(out_pdf_file, "wb")
    output.write(outputStream)
    outputStream.close()

    return 'assets/trck_images/' + str(trckID) + '/pdf/dddddd.pdf'
 