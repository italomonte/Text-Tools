from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'text_tools/pages/home.html')