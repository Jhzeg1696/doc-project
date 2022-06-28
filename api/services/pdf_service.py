from reportlab.pdfgen import canvas
 
 
def create_pdf():
    pdf_file = 'multipage.pdf'
 
    can = canvas.Canvas(pdf_file)
 
    can.drawString(20, 800, "First Page")
    can.showPage()
 
    can.drawString(20, 800, "Second Page")
    can.showPage()
 
    can.drawString(20, 700, "Third Page")
    can.showPage()
 
    can.save()
 
def add_image(trckID, imagesPath, attachedImagesPath):
 
    from PyPDF2 import PdfFileWriter, PdfFileReader
    import io
 
    in_pdf_file = 'og_pdf.pdf'
    out_pdf_file = 'assets/trck_images/' + str(trckID) + '/pdf/dddddd.pdf'
    #img_file = 'assets/trck_images/15/anydesk-sdesarrollo.png'
 
    packet = io.BytesIO()
    can = canvas.Canvas(packet)
    #can.drawString(10, 100, "Hello world")
    x_start = 0
    y_start = 480

    attachedImagesXAxis = 0
    attachedImagesYAxis = 0

    counter = 0
    attachedImagesCounter = 0

    for image in imagesPath:
        can.drawImage(image, x_start + counter, y_start, width=120, preserveAspectRatio=True, mask='auto')
        counter += 125

    for atacchedImage in attachedImagesPath:
        can.drawImage(atacchedImage, attachedImagesXAxis + attachedImagesCounter, attachedImagesYAxis, width=50, preserveAspectRatio=True, mask='auto')
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
 