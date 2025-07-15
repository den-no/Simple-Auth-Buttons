EMAIL_USE_TLS = True #enables Transport Layer Security (TLS) encryption: encrypts the connection between the client and the email server ensuring that the data is secure.
EMAIL_HOST = 'smtp.gmail.com' #the email server that will be used to send emails. SMTP - Simple Mail Transfer Protocol is a protocol used to send and receive emails.
EMAIL_HOST_USER = 'EMAIL_HOST_USER' #the email address that will be used to send emails.
EMAIL_HOST_PASSWORD = 'EMAIL_HOST_PASSWORD' #the password of the email address that will be used to send emails. app password in a 2 step verified email
EMAIL_PORT = 587 #the port number that will be used to send emails. Port 587 is the default port for SMTP over TLS.