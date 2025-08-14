// Mock data for Piyush Dhyani's Portfolio

export const personalInfo = {
  name: "Piyush Dhyani",
  title: "Web Developer",
  college: "MIT",
  email: "piyush.dhyani@gmail.com",
  phone: "+91-9876543210",
  location: "India",
  bio: "Passionate web developer with expertise in modern technologies. I create digital experiences that are both functional and beautiful. Focused on clean code, user experience, and scalable solutions.",
  github: "https://github.com/piyushdhyani",
  linkedin: "https://linkedin.com/in/piyushdhyani",
  twitter: "https://twitter.com/piyushdhyani"
};

export const skills = [
  "React.js",
  "Node.js", 
  "JavaScript",
  "TypeScript",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Express.js",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "Git",
  "Docker",
  "AWS",
  "Firebase"
];

export const projects = [
  {
    id: 1,
    title: "EcoCart - Sustainable E-commerce",
    description: "A full-featured e-commerce platform focusing on eco-friendly products with advanced filtering, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/ecocart",
    demo: "https://ecocart-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    description: "Collaborative task management application with real-time updates, team collaboration, and advanced project tracking features.",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/taskflow",
    demo: "https://taskflow-pro.netlify.app",
    featured: true
  },
  {
    id: 3,
    title: "WeatherWise Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/weatherwise",
    demo: "https://weatherwise-dash.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "SocialMetrics Analytics",
    description: "Python-based social media analytics tool with data visualization, sentiment analysis, and automated reporting features.",
    technologies: ["Python", "Flask", "React", "D3.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/socialmetrics",
    demo: "https://socialmetrics-demo.herokuapp.com",
    featured: true
  },
  {
    id: 5,
    title: "PropertyHub Platform",
    description: "Real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/propertyhub",
    demo: "https://propertyhub-platform.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "CodeReview Assistant",
    description: "AI-powered code review tool that analyzes code quality, suggests improvements, and tracks technical debt across projects.",
    technologies: ["React", "Python", "FastAPI", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    github: "https://github.com/piyushdhyani/codereview",
    demo: "https://codereview-assistant.netlify.app",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    company: "TechStart Solutions",
    position: "Frontend Developer",
    duration: "2023 - Present",
    description: "Developed responsive web applications using React and modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality user experiences."
  },
  {
    id: 2,
    company: "Digital Innovations Lab",
    position: "Full Stack Developer Intern", 
    duration: "2022 - 2023",
    description: "Built end-to-end web applications using MERN stack. Implemented RESTful APIs and worked on database design and optimization."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Product Manager at TechStart",
    content: "Piyush consistently delivers high-quality code and has excellent problem-solving skills. His attention to detail and user-focused approach makes him a valuable team member.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b187?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    position: "Senior Developer at Digital Innovations",
    content: "Working with Piyush was a great experience. He quickly adapted to our tech stack and contributed meaningful features to our platform. Highly recommend his work!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Priya Patel", 
    position: "Professor at MIT",
    content: "Piyush was one of our most dedicated students. His passion for web development and commitment to learning new technologies was evident throughout his academic journey.",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face"
  }
];

export const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Years Experience", value: "2+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Happy Clients", value: "10+" }
];