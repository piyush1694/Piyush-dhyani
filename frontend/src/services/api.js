import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Configure axios defaults
axios.defaults.timeout = 10000; // 10 seconds

// API response interfaces
export const apiService = {
  // Contact Form API
  async submitContactForm(contactData) {
    try {
      const response = await axios.post(`${API_BASE}/contact`, contactData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        error: error.response?.data?.detail || 'Failed to submit contact form'
      };
    }
  },

  // Projects API
  async getProjects(featured = null) {
    try {
      const params = featured !== null ? { featured } : {};
      const response = await axios.get(`${API_BASE}/projects`, { params });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return {
        success: false,
        error: error.response?.data?.detail || 'Failed to fetch projects',
        fallback: true // Use fallback data
      };
    }
  },

  // Stats API
  async getStats() {
    try {
      const response = await axios.get(`${API_BASE}/stats`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      return {
        success: false,
        error: error.response?.data?.detail || 'Failed to fetch stats',
        fallback: true // Use fallback data
      };
    }
  },

  // Health Check
  async healthCheck() {
    try {
      const response = await axios.get(`${API_BASE}/`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Health check failed:', error);
      return {
        success: false,
        error: 'API is not available'
      };
    }
  }
};

// Error handling utility
export const handleApiError = (error, fallbackMessage = 'Something went wrong') => {
  if (error.response) {
    // Server responded with error status
    return error.response.data?.detail || error.response.data?.message || fallbackMessage;
  } else if (error.request) {
    // Request was made but no response received
    return 'Unable to connect to server. Please try again later.';
  } else {
    // Something else happened
    return error.message || fallbackMessage;
  }
};

export default apiService;