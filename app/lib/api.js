// Client-side utility for interacting with the portfolio API
// This file can be used in components and pages to fetch data

class PortfolioAPI {
  static async getProjects() {
    const response = await fetch('/api/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  }

  static async getFeaturedProjects() {
    const response = await fetch('/api/featured-projects');
    if (!response.ok) {
      throw new Error('Failed to fetch featured projects');
    }
    return response.json();
  }

  static async getWorkExperience() {
    const response = await fetch('/api/work-experience');
    if (!response.ok) {
      throw new Error('Failed to fetch work experience');
    }
    return response.json();
  }

  static async getCertificates() {
    const response = await fetch('/api/certificates');
    if (!response.ok) {
      throw new Error('Failed to fetch certificates');
    }
    return response.json();
  }

  static async getMission() {
    const response = await fetch('/api/mission');
    if (!response.ok) {
      throw new Error('Failed to fetch mission');
    }
    return response.json();
  }

  // Add new entries
  static async addProject(project) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to add project');
    }
    return response.json();
  }

  static async addFeaturedProject(project) {
    const response = await fetch('/api/featured-projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error('Failed to add featured project');
    }
    return response.json();
  }

  static async addWorkExperience(experience) {
    const response = await fetch('/api/work-experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(experience),
    });
    if (!response.ok) {
      throw new Error('Failed to add work experience');
    }
    return response.json();
  }

  static async addCertificate(certificate) {
    const response = await fetch('/api/certificates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(certificate),
    });
    if (!response.ok) {
      throw new Error('Failed to add certificate');
    }
    return response.json();
  }
  static async updateMission(missionData) {
    const response = await fetch('/api/mission', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(missionData),
    });
    if (!response.ok) {
      throw new Error('Failed to update mission');
    }
    return response.json();
  }

  // Initialize database
  static async initDatabase() {
    const response = await fetch('/api/init', {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to initialize database');
    }
    return response.json();
  }
}

// Export as named export for easier use
export const portfolioApi = PortfolioAPI;

export default PortfolioAPI;
