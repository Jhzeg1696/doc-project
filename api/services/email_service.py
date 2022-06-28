def send_email_pdf_figs(path_to_pdf):
    ## credits: http://linuxcursor.com/python-programming/06-how-to-send-pdf-ppt-attachment-with-html-body-in-python-script
    from socket import gethostname
    #import email
    from email.mime.application import MIMEApplication
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText
    import smtplib
    import json

    server = smtplib.SMTP_SSL('smtp.zoho.com', 465)
    #server.starttls()
    server.login('testing1696@zohomail.com', "Catastros1696")
    # Craft message (obj)
    msg = MIMEMultipart()
    message = f'ssss\nSend from Hostname: {gethostname()}'
    msg['Subject'] = "Testing"
    msg['From'] = 'testing1696@zohomail.com'
    msg['To'] = "testingacc1696@gmail.com"
    # Insert the text to the msg going by e-mail
    msg.attach(MIMEText(message, "plain"))
    # Attach the pdf to the msg going by e-mail
    with open(path_to_pdf, "rb") as f:
        #attach = email.mime.application.MIMEApplication(f.read(),_subtype="pdf")
        attach = MIMEApplication(f.read(),_subtype="pdf")
    attach.add_header('Content-Disposition','attachment',filename=str(path_to_pdf))
    msg.attach(attach)
    # send msg
    server.send_message(msg)