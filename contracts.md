# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for Piyush Dhyani's portfolio website. The backend will provide real functionality for the contact form and project management.

## Current Mock Data to Replace
- **Contact Form**: Currently shows success toast but doesn't store/send data
- **Projects**: Static data from `mock.js` - will be fetched from database
- **Stats**: Static counters - will be calculated from real data

## Backend API Endpoints

### 1. Contact Form API
```
POST /api/contact
Body: {
  name: string,
  email: string, 
  subject: string,
  message: string
}
Response: {
  success: boolean,
  message: string,
  id: string
}
```

### 2. Projects API
```
GET /api/projects
Response: {
  projects: [Project],
  total: number
}

GET /api/projects?featured=true
Response: {
  projects: [Project (featured only)],
  total: number
}
```

### 3. Stats API
```
GET /api/stats
Response: {
  projectsCompleted: number,
  yearsExperience: number,
  technologiesUsed: number,
  contactsReceived: number
}
```

## Database Models

### Contact Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  createdAt: Date (default: now),
  isRead: Boolean (default: false)
}
```

### Project Schema
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (required),
  technologies: [String],
  image: String (URL),
  github: String (URL),
  demo: String (URL),
  featured: Boolean (default: false),
  order: Number (for sorting),
  createdAt: Date (default: now)
}
```

## Frontend Integration Points

### 1. Contact Form (Contact.jsx)
- Replace mock submission with real API call
- Keep the same UI/UX and toast notifications
- Handle loading states and error scenarios

### 2. Projects Section (Projects.jsx)
- Replace `import { projects } from '../mock'` with API fetch
- Implement loading states for better UX
- Keep the same filtering and animation logic

### 3. Stats Section (About.jsx)
- Replace static stats with dynamic API-fetched data
- Add loading skeleton for stats counters

## Implementation Plan

### Phase 1: Backend Models & APIs
1. Create Contact and Project models
2. Implement contact form submission endpoint
3. Implement projects CRUD endpoints
4. Add stats calculation endpoint

### Phase 2: Frontend Integration
1. Create API service layer for backend calls
2. Update Contact component to use real API
3. Update Projects component to fetch from database
4. Update About stats to be dynamic

### Phase 3: Data Seeding
1. Seed database with existing project data
2. Test all integrations
3. Ensure all animations and UX remain intact

## Error Handling
- API errors should show user-friendly messages
- Loading states for all async operations
- Fallback to cached data where appropriate
- Form validation on both frontend and backend

## Security Considerations
- Input validation and sanitization
- Rate limiting for contact form
- CORS configuration
- Basic spam protection for contact form

## Success Criteria
✅ Contact form submissions stored in database  
✅ Projects loaded dynamically from database  
✅ Stats calculated from real data  
✅ All existing animations and UX preserved  
✅ Error handling and loading states working  
✅ No breaking changes to user experience  

## Notes
- Keep all existing mock data as fallback during development
- Maintain the same component structure and styling
- All animations and interactions should work identically
- The portfolio should be fully functional as a real application