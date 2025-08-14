#!/usr/bin/env python3

"""
Comprehensive Backend API Testing for Portfolio Application
Tests all endpoints: Contact Form, Projects, Stats, and Health Check
"""

import asyncio
import aiohttp
import json
import os
from datetime import datetime
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
frontend_env_path = ROOT_DIR / 'frontend' / '.env'
if frontend_env_path.exists():
    load_dotenv(frontend_env_path)

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔗 Testing Backend API at: {API_BASE_URL}")

class PortfolioAPITester:
    def __init__(self):
        self.session = None
        self.test_results = {
            'health_check': {'passed': False, 'details': ''},
            'contact_form': {'passed': False, 'details': ''},
            'projects_api': {'passed': False, 'details': ''},
            'stats_api': {'passed': False, 'details': ''},
            'database_verification': {'passed': False, 'details': ''}
        }
        
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
        
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    async def test_health_check(self):
        """Test the health check endpoint"""
        print("\n🏥 Testing Health Check Endpoint...")
        try:
            async with self.session.get(f"{API_BASE_URL}/") as response:
                if response.status == 200:
                    data = await response.json()
                    if data.get('message') == 'Portfolio API is running' and data.get('version') == '1.0.0':
                        self.test_results['health_check']['passed'] = True
                        self.test_results['health_check']['details'] = "✅ Health check passed - API is running correctly"
                        print("✅ Health check endpoint working correctly")
                        return True
                    else:
                        self.test_results['health_check']['details'] = f"❌ Unexpected response format: {data}"
                else:
                    self.test_results['health_check']['details'] = f"❌ Health check failed with status {response.status}"
                    
        except Exception as e:
            self.test_results['health_check']['details'] = f"❌ Health check error: {str(e)}"
            print(f"❌ Health check failed: {str(e)}")
            
        return False

    async def test_contact_form_api(self):
        """Test the contact form API with various scenarios"""
        print("\n📧 Testing Contact Form API...")
        
        # Test 1: Valid contact form submission
        valid_contact_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "subject": "Portfolio Inquiry - Web Development Services",
            "message": "Hi Piyush, I came across your portfolio and I'm impressed with your work. I'd like to discuss a potential web development project for my startup. Could we schedule a call this week?"
        }
        
        try:
            async with self.session.post(
                f"{API_BASE_URL}/contact",
                json=valid_contact_data,
                headers={'Content-Type': 'application/json'}
            ) as response:
                
                if response.status == 200:
                    data = await response.json()
                    if (data.get('success') is True and 
                        'Thank you for your message' in data.get('message', '') and
                        data.get('id')):
                        print("✅ Valid contact form submission successful")
                        
                        # Test 2: Invalid email format
                        invalid_email_data = valid_contact_data.copy()
                        invalid_email_data['email'] = 'invalid-email'
                        
                        async with self.session.post(
                            f"{API_BASE_URL}/contact",
                            json=invalid_email_data,
                            headers={'Content-Type': 'application/json'}
                        ) as invalid_response:
                            
                            if invalid_response.status == 422:  # Validation error
                                print("✅ Email validation working correctly")
                                
                                # Test 3: Missing required fields
                                incomplete_data = {"name": "Test User"}
                                
                                async with self.session.post(
                                    f"{API_BASE_URL}/contact",
                                    json=incomplete_data,
                                    headers={'Content-Type': 'application/json'}
                                ) as incomplete_response:
                                    
                                    if incomplete_response.status == 422:
                                        print("✅ Required field validation working correctly")
                                        self.test_results['contact_form']['passed'] = True
                                        self.test_results['contact_form']['details'] = "✅ Contact form API working correctly - validation and submission successful"
                                        return True
                                    else:
                                        self.test_results['contact_form']['details'] = f"❌ Required field validation failed - status: {incomplete_response.status}"
                            else:
                                self.test_results['contact_form']['details'] = f"❌ Email validation failed - status: {invalid_response.status}"
                    else:
                        self.test_results['contact_form']['details'] = f"❌ Unexpected response format: {data}"
                else:
                    self.test_results['contact_form']['details'] = f"❌ Contact form submission failed with status {response.status}"
                    
        except Exception as e:
            self.test_results['contact_form']['details'] = f"❌ Contact form API error: {str(e)}"
            print(f"❌ Contact form API failed: {str(e)}")
            
        return False

    async def test_projects_api(self):
        """Test the projects API with filtering"""
        print("\n📁 Testing Projects API...")
        
        try:
            # Test 1: Get all projects
            async with self.session.get(f"{API_BASE_URL}/projects") as response:
                if response.status == 200:
                    data = await response.json()
                    if 'projects' in data and 'total' in data:
                        total_projects = data['total']
                        projects = data['projects']
                        
                        if total_projects == 6 and len(projects) == 6:
                            print(f"✅ All projects fetched successfully - {total_projects} projects found")
                            
                            # Verify project structure
                            first_project = projects[0]
                            required_fields = ['id', 'title', 'description', 'technologies', 'image', 'github', 'demo', 'featured', 'order']
                            
                            if all(field in first_project for field in required_fields):
                                print("✅ Project structure validation passed")
                                
                                # Test 2: Get featured projects only
                                async with self.session.get(f"{API_BASE_URL}/projects?featured=true") as featured_response:
                                    if featured_response.status == 200:
                                        featured_data = await featured_response.json()
                                        featured_projects = featured_data['projects']
                                        
                                        # Count featured projects (should be 3 based on seed data)
                                        featured_count = len([p for p in featured_projects if p.get('featured') is True])
                                        
                                        if featured_count == 3:
                                            print(f"✅ Featured projects filter working - {featured_count} featured projects")
                                            self.test_results['projects_api']['passed'] = True
                                            self.test_results['projects_api']['details'] = f"✅ Projects API working correctly - {total_projects} total projects, {featured_count} featured"
                                            return True
                                        else:
                                            self.test_results['projects_api']['details'] = f"❌ Featured filter incorrect - expected 3, got {featured_count}"
                                    else:
                                        self.test_results['projects_api']['details'] = f"❌ Featured projects query failed with status {featured_response.status}"
                            else:
                                missing_fields = [field for field in required_fields if field not in first_project]
                                self.test_results['projects_api']['details'] = f"❌ Project structure invalid - missing fields: {missing_fields}"
                        else:
                            self.test_results['projects_api']['details'] = f"❌ Expected 6 projects, got {total_projects}"
                    else:
                        self.test_results['projects_api']['details'] = f"❌ Invalid response format - missing 'projects' or 'total' fields"
                else:
                    self.test_results['projects_api']['details'] = f"❌ Projects API failed with status {response.status}"
                    
        except Exception as e:
            self.test_results['projects_api']['details'] = f"❌ Projects API error: {str(e)}"
            print(f"❌ Projects API failed: {str(e)}")
            
        return False

    async def test_stats_api(self):
        """Test the stats API"""
        print("\n📊 Testing Stats API...")
        
        try:
            async with self.session.get(f"{API_BASE_URL}/stats") as response:
                if response.status == 200:
                    data = await response.json()
                    required_fields = ['projectsCompleted', 'yearsExperience', 'technologiesMastered', 'contactsReceived']
                    
                    if all(field in data for field in required_fields):
                        projects_completed = data['projectsCompleted']
                        years_experience = data['yearsExperience']
                        technologies_mastered = data['technologiesMastered']
                        contacts_received = data['contactsReceived']
                        
                        # Validate expected values based on seeded data
                        if (projects_completed == 6 and  # 6 seeded projects
                            years_experience.endswith('+') and  # Should be "X+" format
                            technologies_mastered > 0 and  # Should have counted unique technologies
                            contacts_received >= 0):  # Should be 0 or more (depending on previous tests)
                            
                            print(f"✅ Stats API working correctly:")
                            print(f"   - Projects Completed: {projects_completed}")
                            print(f"   - Years Experience: {years_experience}")
                            print(f"   - Technologies Mastered: {technologies_mastered}")
                            print(f"   - Contacts Received: {contacts_received}")
                            
                            self.test_results['stats_api']['passed'] = True
                            self.test_results['stats_api']['details'] = f"✅ Stats API working correctly - {projects_completed} projects, {technologies_mastered} technologies"
                            return True
                        else:
                            self.test_results['stats_api']['details'] = f"❌ Stats values incorrect - projects: {projects_completed}, years: {years_experience}, tech: {technologies_mastered}, contacts: {contacts_received}"
                    else:
                        missing_fields = [field for field in required_fields if field not in data]
                        self.test_results['stats_api']['details'] = f"❌ Stats response missing fields: {missing_fields}"
                else:
                    self.test_results['stats_api']['details'] = f"❌ Stats API failed with status {response.status}"
                    
        except Exception as e:
            self.test_results['stats_api']['details'] = f"❌ Stats API error: {str(e)}"
            print(f"❌ Stats API failed: {str(e)}")
            
        return False

    async def verify_database_seeding(self):
        """Verify that the database was seeded correctly"""
        print("\n🗄️  Verifying Database Seeding...")
        
        try:
            # Check if we can fetch projects (indirect database verification)
            async with self.session.get(f"{API_BASE_URL}/projects") as response:
                if response.status == 200:
                    data = await response.json()
                    projects = data.get('projects', [])
                    
                    # Verify specific seeded projects exist
                    expected_titles = [
                        "EcoCart - Sustainable E-commerce",
                        "TaskFlow Pro", 
                        "WeatherWise Dashboard",
                        "SocialMetrics Analytics",
                        "PropertyHub Platform",
                        "CodeReview Assistant"
                    ]
                    
                    found_titles = [p['title'] for p in projects]
                    
                    if all(title in found_titles for title in expected_titles):
                        print("✅ Database seeding verified - all expected projects found")
                        self.test_results['database_verification']['passed'] = True
                        self.test_results['database_verification']['details'] = "✅ Database properly seeded with 6 projects"
                        return True
                    else:
                        missing_titles = [title for title in expected_titles if title not in found_titles]
                        self.test_results['database_verification']['details'] = f"❌ Missing seeded projects: {missing_titles}"
                else:
                    self.test_results['database_verification']['details'] = f"❌ Could not verify database seeding - API status {response.status}"
                    
        except Exception as e:
            self.test_results['database_verification']['details'] = f"❌ Database verification error: {str(e)}"
            print(f"❌ Database verification failed: {str(e)}")
            
        return False

    async def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting Portfolio Backend API Tests")
        print("=" * 60)
        
        # Run tests in order
        await self.test_health_check()
        await self.verify_database_seeding()
        await self.test_projects_api()
        await self.test_stats_api()
        await self.test_contact_form_api()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📋 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results.values() if result['passed'])
        
        for test_name, result in self.test_results.items():
            status = "✅ PASSED" if result['passed'] else "❌ FAILED"
            print(f"{test_name.replace('_', ' ').title()}: {status}")
            if result['details']:
                print(f"   {result['details']}")
        
        print(f"\nOverall Result: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("🎉 All backend API tests passed successfully!")
            return True
        else:
            print("⚠️  Some backend API tests failed - check details above")
            return False

async def main():
    """Main test execution function"""
    try:
        async with PortfolioAPITester() as tester:
            success = await tester.run_all_tests()
            return success
    except Exception as e:
        print(f"❌ Test execution failed: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 Portfolio Backend API Test Suite")
    print("Testing comprehensive backend functionality...")
    print(f"Backend URL: {API_BASE_URL}")
    
    success = asyncio.run(main())
    exit(0 if success else 1)