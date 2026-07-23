
from django.contrib import admin
from .models import GeneralEnquiry, AdmissionEnquiry

@admin.register(GeneralEnquiry)
class GeneralEnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'enquiry_type', 'email', 'phone', 'created_at')
    list_filter = ('enquiry_type', 'created_at')
    search_fields = ('name', 'email', 'phone', 'subject', 'message')
    readonly_fields = ('created_at',)

@admin.register(AdmissionEnquiry)
class AdmissionEnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'enquiry_type', 'course', 'learning_mode', 'phone', 'college', 'created_at')
    list_filter = ('enquiry_type', 'learning_mode', 'created_at')
    search_fields = ('name', 'email', 'phone', 'college', 'qualification', 'course')
    readonly_fields = ('created_at',)

class CourseEnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'course', 'created_at')
    search_fields = ('name', 'email', 'phone', 'course')
    list_filter = ('learning_mode', 'created_at')