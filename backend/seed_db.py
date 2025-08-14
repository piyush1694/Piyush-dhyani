#!/usr/bin/env python3

"""
Database seed script for Portfolio application
Seeds the database with initial project data
"""

import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
projects_collection = db.projects
contacts_collection = db.contacts

# Sample project data (from mock.js)
sample_projects = [
    {
        "_id": "1",
        "title": "EcoCart - Sustainable E-commerce",
        "description": "A full-featured e-commerce platform focusing on eco-friendly products with advanced filtering, payment integration, and admin dashboard.",
        "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/ecocart",
        "demo": "https://ecocart-demo.vercel.app",
        "featured": True,
        "order": 1,
        "created_at": "2024-01-15T10:00:00Z"
    },
    {
        "_id": "2",
        "title": "TaskFlow Pro",
        "description": "Collaborative task management application with real-time updates, team collaboration, and advanced project tracking features.",
        "technologies": ["React", "Express", "PostgreSQL", "Socket.io"],
        "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/taskflow",
        "demo": "https://taskflow-pro.netlify.app",
        "featured": True,
        "order": 2,
        "created_at": "2024-02-10T10:00:00Z"
    },
    {
        "_id": "3",
        "title": "WeatherWise Dashboard",
        "description": "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
        "technologies": ["React", "TypeScript", "Chart.js", "Weather API"],
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/weatherwise",
        "demo": "https://weatherwise-dash.vercel.app",
        "featured": False,
        "order": 3,
        "created_at": "2024-03-05T10:00:00Z"
    },
    {
        "_id": "4",
        "title": "SocialMetrics Analytics",
        "description": "Python-based social media analytics tool with data visualization, sentiment analysis, and automated reporting features.",
        "technologies": ["Python", "Flask", "React", "D3.js", "PostgreSQL"],
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/socialmetrics",
        "demo": "https://socialmetrics-demo.herokuapp.com",
        "featured": True,
        "order": 4,
        "created_at": "2024-04-20T10:00:00Z"
    },
    {
        "_id": "5",
        "title": "PropertyHub Platform",
        "description": "Real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
        "technologies": ["Next.js", "Node.js", "MongoDB", "AWS S3"],
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/propertyhub",
        "demo": "https://propertyhub-platform.vercel.app",
        "featured": False,
        "order": 5,
        "created_at": "2024-05-12T10:00:00Z"
    },
    {
        "_id": "6",
        "title": "CodeReview Assistant",
        "description": "AI-powered code review tool that analyzes code quality, suggests improvements, and tracks technical debt across projects.",
        "technologies": ["React", "Python", "FastAPI", "OpenAI API"],
        "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        "github": "https://github.com/piyushdhyani/codereview",
        "demo": "https://codereview-assistant.netlify.app",
        "featured": False,
        "order": 6,
        "created_at": "2024-06-08T10:00:00Z"
    }
]

async def seed_database():
    """Seed the database with initial data"""
    try:
        print("🌱 Starting database seeding...")
        
        # Clear existing data
        print("🗑️  Clearing existing projects...")
        await projects_collection.delete_many({})
        
        # Insert sample projects
        print("📁 Inserting sample projects...")
        result = await projects_collection.insert_many(sample_projects)
        print(f"✅ Inserted {len(result.inserted_ids)} projects")
        
        # Create indexes for better performance
        print("🔍 Creating database indexes...")
        await projects_collection.create_index("featured")
        await projects_collection.create_index("order")
        await projects_collection.create_index("created_at")
        await contacts_collection.create_index("created_at")
        await contacts_collection.create_index("is_read")
        
        print("✅ Database indexes created")
        print("🎉 Database seeding completed successfully!")
        
        # Print summary
        total_projects = await projects_collection.count_documents({})
        featured_projects = await projects_collection.count_documents({"featured": True})
        
        print(f"\n📊 Database Summary:")
        print(f"   Total Projects: {total_projects}")
        print(f"   Featured Projects: {featured_projects}")
        print(f"   Regular Projects: {total_projects - featured_projects}")
        
    except Exception as e:
        print(f"❌ Error seeding database: {str(e)}")
        raise e
    finally:
        client.close()

if __name__ == "__main__":
    print("🚀 Portfolio Database Seeder")
    print("=" * 50)
    asyncio.run(seed_database())