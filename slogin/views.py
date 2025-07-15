from django.core.mail import send_mail
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
from django.contrib import messages
from django.contrib.auth.models import User, auth
from django.conf import settings
from myfirst import settings
from django.views.decorators.http import require_POST

import re #reads regular expression

# Create your views here.

def home(request):
    return render(request, "index.html" )

def is_valid_password(password):
        if len(password) < 8:
          return False, "Password must be at least 8 characters long."
        if not re.search(r'[A-Z]', password):
         return False, "Password must contain at least one uppercase letter."
        if not re.search(r'[a-z]', password):
         return False, "Password must contain at least one lowercase letter."
        if not re.search(r'\d', password):
         return False, "Password must contain at least one digit."
        if not re.search(r'[!@#$%^&*()\-_=+[\]{};:\'",.<>?/\\|`~]', password):
         return False, "Password must contain at least one special character."
        return True, ""

def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        

        
        #check if any field is empty
        if not username or not email or not password or not password2:
            messages.error(request, "Please fill all fields")
            return redirect('signup')
        
        #check if passwords match
        if password != password2:
            messages.error(request, "Passwords do not match")
            return redirect('signup')
        
        #check if email already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists")
            return redirect('signup')
        
        #Username can only contain letters and numbers — no spaces, special characters, or symbols.
        if not username.isalnum():
            messages.error(request, "Username must be Alpha-Numeric")
            return redirect('signup')
        #Check if Username is already taken
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return redirect('signup')
        
        #Username must be < 10
        if len(username)>10:
            messages.error(request, "Username must be Under 10 characters")
            return redirect('signup')
        
        #create and save user
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, "Registration Successful..Check a confirmation message on your Email")
        
        #Welcome Email
        subject = "Welcome to Simple Login System"
        message = "Hello" + user.username + "!! \n" + "Welcome to Simple Login Sysyem!! \n Thank you for visiting our website. \n We have also sent you a confirmation email address in order to activate your account. \n\n Thanking you\n Dennis Kimani "
        from_email = settings.EMAIL_HOST_USER
        to_list = [user.email]
        send_mail(subject, message, from_email, to_list, fail_silently=True)
        return redirect('signin')
          
    return render(request, "signup.html")


        
def signin(request):
    if request.method == 'POST':
        identifier = request.POST.get('identifier')  # This field can be username or email
        password = request.POST.get('password')

        # Try to find user by username or email
        user_obj = None
        if User.objects.filter(username=identifier).exists():
            user_obj = User.objects.get(username=identifier)
        elif User.objects.filter(email=identifier).exists():
            user_obj = User.objects.get(email=identifier)
        else:
            messages.error(request, 'Invalid username or email')
            return redirect('signin')

        # Authenticate using the found username
        user = auth.authenticate(username=user_obj.username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Incorrect password')
            return redirect('signin')
    else:
        return render(request, 'signin.html')


@require_POST
def signout(request):
    auth.logout(request)
    return redirect('/')
    #pass