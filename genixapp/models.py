from django.db import models


class GeneralEnquiry(models.Model):
    ENQUIRY_TYPES = [
        ('Service', 'Service'),
        ('Project', 'Project'),
        ('Contact', 'Contact'),
        ('FAQ', 'FAQ'),
    ]

    enquiry_type = models.CharField(max_length=20, choices=ENQUIRY_TYPES)
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "General Enquiry"
        verbose_name_plural = "General Enquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.enquiry_type}] {self.name} - {self.email}"


class AdmissionEnquiry(models.Model):
    TYPES = [
        ('Course', 'Course'),
        ('Internship', 'Internship'),
    ]
    
    MODE_CHOICES = [
        ('Online', 'Online'),
        ('Offline', 'Offline'),
        ('Hybrid', 'Hybrid'),
    ]

    enquiry_type = models.CharField(max_length=20, choices=TYPES, default='Course')
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    college = models.CharField(max_length=200, blank=True, null=True)
    qualification = models.CharField(max_length=100, blank=True, null=True)
    course = models.CharField(max_length=150, blank=True, null=True)
    learning_mode = models.CharField(max_length=20, choices=MODE_CHOICES, default='Hybrid')
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Admission / Internship"
        verbose_name_plural = "Admissions & Internships"
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.enquiry_type}] {self.name} ({self.course or 'General'})"


class CourseEnquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    college = models.CharField(max_length=150, blank=True, null=True)
    qualification = models.CharField(max_length=100, blank=True, null=True)
    course = models.CharField(max_length=150, blank=True, null=True)
    learning_mode = models.CharField(max_length=50, default='Hybrid')
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Course Enquiry"
        verbose_name_plural = "Course Enquiries"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.course or 'General Enquiry'}"