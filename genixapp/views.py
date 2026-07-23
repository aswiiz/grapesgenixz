from django.shortcuts import render, redirect
from django.contrib import messages
from .models import CourseEnquiry, AdmissionEnquiry
from .forms import GeneralEnquiryForm, AdmissionEnquiryForm


def index(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def services(request):
    return render(request, "services.html")


def courses(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        whatsapp = request.POST.get('whatsapp')
        college = request.POST.get('college')
        qualification = request.POST.get('qualification')
        course = request.POST.get('course')
        learning_mode = request.POST.get('learning_mode', 'Hybrid')
        message = request.POST.get('message')

        CourseEnquiry.objects.create(
            name=name,
            email=email,
            phone=phone,
            whatsapp=whatsapp,
            college=college,
            qualification=qualification,
            course=course,
            learning_mode=learning_mode,
            message=message
        )

        messages.success(request, "Your enquiry has been submitted successfully!")
        return redirect('courses')

    return render(request, "courses.html")


def internship(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        college = request.POST.get('college')
        course = request.POST.get('course')
        learning_mode = request.POST.get('learning_mode', 'Hybrid')
        message = request.POST.get('message')

        AdmissionEnquiry.objects.create(
            enquiry_type='Internship',
            name=name,
            email=email,
            phone=phone,
            college=college,
            course=course,
            learning_mode=learning_mode,
            message=message
        )

        messages.success(request, "Your internship application has been submitted successfully!")
        return redirect('internship')

    return render(request, "internship.html")


def ioc(request):
    return render(request, "ioc.html")


def projects(request):
    return render(request, "projects.html")


def team(request):
    return render(request, "team.html")


def contact(request):
    return render(request, "contact.html")


def faq(request):
    return render(request, "faq.html")


def journey(request):
    return render(request, "journey.html")


def handle_general_enquiry(request):
    if request.method == 'POST':
        form = GeneralEnquiryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your enquiry has been submitted successfully! We will get back to you soon.")
            return redirect(request.META.get('HTTP_REFERER', '/'))
        else:
            messages.error(request, "There was an error in your submission. Please check the form and try again.")
    return redirect('/')


def handle_admission_enquiry(request):
    if request.method == 'POST':
        form = AdmissionEnquiryForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Application submitted successfully! Our team will contact you shortly.")
            return redirect(request.META.get('HTTP_REFERER', '/'))
        else:
            messages.error(request, "There was an error in your submission. Please check the form and try again.")
    return redirect('/')