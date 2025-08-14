from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact Form Models
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_read: bool = Field(default=False)

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str

# Project Models
class ProjectCreate(BaseModel):
    title: str = Field(..., min_length=2, max_length=100)
    description: str = Field(..., min_length=10, max_length=500)
    technologies: List[str] = Field(..., min_items=1)
    image: str = Field(..., pattern=r'^https?://.+')
    github: str = Field(..., pattern=r'^https://github\.com/.+')
    demo: str = Field(..., pattern=r'^https?://.+')
    featured: bool = Field(default=False)
    order: int = Field(default=0)

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    technologies: List[str]
    image: str
    github: str
    demo: str
    featured: bool
    order: int
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectsResponse(BaseModel):
    projects: List[Project]
    total: int

# Stats Models
class Stats(BaseModel):
    projects_completed: int = Field(alias="projectsCompleted")
    years_experience: str = Field(alias="yearsExperience")
    technologies_mastered: int = Field(alias="technologiesMastered")
    contacts_received: int = Field(alias="contactsReceived")

    class Config:
        allow_population_by_field_name = True

# Response Models
class SuccessResponse(BaseModel):
    success: bool = True
    message: str

class ErrorResponse(BaseModel):
    success: bool = False
    error: str
    details: Optional[str] = None