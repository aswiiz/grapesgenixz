from django import forms
from .models import GeneralEnquiry, AdmissionEnquiry

class GeneralEnquiryForm(forms.ModelForm):
    class Meta:
        model = GeneralEnquiry
        fields = ['enquiry_type', 'name', 'email', 'phone', 'subject', 'message']
        widgets = {
            'enquiry_type': forms.HiddenInput(),
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Full Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Your Email Address'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Phone Number'}),
            'subject': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Subject'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 4, 'placeholder': 'Tell us about your inquiry...'}),
        }


class AdmissionEnquiryForm(forms.ModelForm):
    class Meta:
        model = AdmissionEnquiry
        fields = ['enquiry_type', 'name', 'email', 'phone', 'college', 'qualification', 'course', 'learning_mode', 'message']
        widgets = {
            'enquiry_type': forms.HiddenInput(),
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Full Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Your Email Address'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Phone Number'}),
            'college': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'College / Institution Name'}),
            'qualification': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Qualification / Stream'}),
            'course': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Course / Domain Interested In'}),
            'learning_mode': forms.Select(attrs={'class': 'form-control'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'Additional details (optional)'}),
        }