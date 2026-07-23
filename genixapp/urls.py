from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="home"),
    path("about/", views.about, name="about"),
    path("services/", views.services, name="services"),
    path("courses/", views.courses, name="courses"),
    path("internship/", views.internship, name="internship"),
    path("ioc/", views.ioc, name="ioc"),
    path("projects/", views.projects, name="projects"),
    path("team/", views.team, name="team"),
    path("contact/", views.contact, name="contact"),
    path("faq/", views.faq, name="faq"),
    path("journey/", views.journey, name="journey"),

    # Submit Endpoints
    path('submit-general-enquiry/', views.handle_general_enquiry, name='submit_general_enquiry'),
    path('submit-admission-enquiry/', views.handle_admission_enquiry, name='submit_admission_enquiry'),
]