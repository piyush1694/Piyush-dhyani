from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from datetime import datetime
from typing import List, Optional
import uuid

# Import models
from models import (
    ContactCreate, Contact, ContactResponse,
    ProjectCreate, Project, ProjectsResponse,
    Stats, SuccessResponse, ErrorResponse
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
contacts_collection = db.contacts
projects_collection = db.projects

# Create the main app without a prefix
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running", "version": "1.0.0"}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactCreate):
    try:
        # Create contact object
        contact = Contact(
            name=contact_data.name,
            email=contact_data.email,
            subject=contact_data.subject,
            message=contact_data.message
        )
        
        # Insert into database
        contact_dict = contact.dict()
        contact_dict["_id"] = contact_dict["id"]  # Use custom id as MongoDB _id
        del contact_dict["id"]  # Remove the id field
        
        result = await contacts_collection.insert_one(contact_dict)
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you within 24 hours.",
            id=contact.id
        )
    
    except Exception as e:
        logging.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts(limit: int = 10, skip: int = 0):
    try:
        contacts = await contacts_collection.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        
        # Convert MongoDB _id back to id
        for contact in contacts:
            contact["id"] = contact["_id"]
            del contact["_id"]
        
        return [Contact(**contact) for contact in contacts]
    
    except Exception as e:
        logging.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")

# Projects Endpoints
@api_router.get("/projects", response_model=ProjectsResponse)
async def get_projects(featured: Optional[bool] = None):
    try:
        # Build query
        query = {}
        if featured is not None:
            query["featured"] = featured
        
        # Fetch projects
        projects = await projects_collection.find(query).sort("order", 1).to_list(1000)
        
        # Convert MongoDB _id back to id
        for project in projects:
            project["id"] = project["_id"]
            del project["_id"]
        
        project_objects = [Project(**project) for project in projects]
        
        return ProjectsResponse(
            projects=project_objects,
            total=len(project_objects)
        )
    
    except Exception as e:
        logging.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@api_router.post("/projects", response_model=Project)
async def create_project(project_data: ProjectCreate):
    try:
        # Create project object
        project = Project(
            title=project_data.title,
            description=project_data.description,
            technologies=project_data.technologies,
            image=project_data.image,
            github=project_data.github,
            demo=project_data.demo,
            featured=project_data.featured,
            order=project_data.order
        )
        
        # Insert into database
        project_dict = project.dict()
        project_dict["_id"] = project_dict["id"]
        del project_dict["id"]
        
        result = await projects_collection.insert_one(project_dict)
        
        return project
    
    except Exception as e:
        logging.error(f"Error creating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create project")

# Stats Endpoint
@api_router.get("/stats", response_model=Stats)
async def get_stats():
    try:
        # Calculate stats from database
        projects_count = await projects_collection.count_documents({})
        contacts_count = await contacts_collection.count_documents({})
        
        # Get unique technologies from all projects
        projects = await projects_collection.find({}, {"technologies": 1}).to_list(1000)
        all_technologies = set()
        for project in projects:
            all_technologies.update(project.get("technologies", []))
        
        # Calculate years of experience (assuming started in 2022)
        current_year = datetime.now().year
        years_exp = current_year - 2022
        
        return Stats(
            projectsCompleted=projects_count,
            yearsExperience=f"{years_exp}+",
            technologiesMastered=len(all_technologies),
            contactsReceived=contacts_count
        )
    
    except Exception as e:
        logging.error(f"Error calculating stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to calculate stats")

# Include the router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
