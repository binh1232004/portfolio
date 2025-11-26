import { Low, JSONFile } from 'lowdb'
import path from 'path';
import fs from 'fs';

// Ensure this only runs on server side
if (typeof window !== 'undefined') {
  throw new Error('Database module should only be used on the server side');
}

// Determine the database path based on environment
const getDbPath = () => {
  const sourceFile = path.join(process.cwd(), 'public', 'db', 'data.json');
  
  // During build (Next.js static generation), return source file path
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return sourceFile;
  }
  
  // In production/development runtime, try multiple writable directories
  let dbDir;
  
  if (process.env.NODE_ENV === 'production') {
    // Try /tmp first (Linux/Mac), fall back to appdata on Windows
    dbDir = path.join('/tmp', 'db');
    
    // On Windows, /tmp might not work, try TEMP env variable
    if (!fs.existsSync('/tmp')) {
      dbDir = path.join(process.env.TEMP || process.env.TMP || '.db', 'portfolio-db');
    }
  } else {
    // Local development - use .db directory
    dbDir = path.join(process.cwd(), '.db');
  }
  
  // Ensure db directory exists (safe to do at runtime)
  try {
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }
  } catch (error) {
    console.log('Warning: Could not create db directory at', dbDir, '- using source file');
    // Fallback to source file if we can't create directory
    return sourceFile;
  }
  
  const file = path.join(dbDir, 'data.json');
  
  // Copy initial data from public/db if it exists and target doesn't have it yet
  if (!fs.existsSync(file) && fs.existsSync(sourceFile)) {
    try {
      const data = fs.readFileSync(sourceFile, 'utf8');
      fs.writeFileSync(file, data, 'utf8');
    } catch (error) {
      console.log('Could not copy initial data:', error.message);
      return sourceFile;
    }
  }
  
  return file;
};

const file = getDbPath();
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Initialize default data structure
const defaultData = {
  projects: [
    {
      projectNum: 1,
      date: "09/03/2024",
      title: "JOHN DOE",
      description: "E-commerce Platform",
      url: "🛒-commerce",
    },
    {
      projectNum: 2,
      date: "08/15/2024", 
      title: "PROJECT TWO",
      description: "Cloud Infrastructure",
      url: "☁️-cloud",
    },
    {
      projectNum: 3,
      date: "07/20/2024",
      title: "PROJECT THREE", 
      description: "DevOps Pipeline",
      url: "🔧-devops",
    },
  ],
  featuredProjects: [
    {
      num: 1,
      title: "Project Title 1",
      description: "Enhanced project with 3D visualization and interactive elements.",
      tags: "Tags: Three.js, React, WebGL"
    },
    {
      num: 2,
      title: "Project Title 2", 
      description: "Enhanced project with 3D visualization and interactive elements.",
      tags: "Tags: Three.js, React, WebGL"
    }
  ],
  workExperience: [
    {
      date: "09/03/2024 - Present",
      title: "Three-month apprentice at Company X",
      description: "Cloud engineering and DevOps implementation.",
    },
    {
      date: "06/01/2023 - 08/30/2024",
      title: "Three-month apprentice at Company Y",
      description: "Full-stack development and 3D visualization.",
    },
  ],
  certificates: [
    { date: "09/03/2024", title: "CompTIA A+" },
    {
      date: "08/15/2024",
      title: "AWS Certified Cloud Practitioner",
    },
  ],
}

// Initialize database
export async function initDatabase() {
  await db.read()
  db.data ||= defaultData
  await db.write()
}

// Data access methods
export class PortfolioData {
  static async getProjects() {
    await db.read()
    return db.data.projects || []
  }

  static async getFeaturedProjects() {
    await db.read()
    return db.data.featuredProjects || []
  }

  static async getWorkExperience() {
    await db.read()
    return db.data.workExperience || []
  }

  static async getCertificates() {
    await db.read()
    return db.data.certificates || []
  }

  static async getMission() {
    await db.read()
    return db.data.mission || {}
  }

  // Add new entries
  static async addProject(project) {
    await db.read()
    const newProjectNum = Math.max(...db.data.projects.map(p => p.projectNum)) + 1
    const newProject = { ...project, projectNum: newProjectNum }
    db.data.projects.push(newProject)
    await db.write()
    return newProject
  }

  static async addFeaturedProject(project) {
    await db.read()
    const newNum = Math.max(...db.data.featuredProjects.map(p => p.num)) + 1
    const newProject = { ...project, num: newNum }
    db.data.featuredProjects.push(newProject)
    await db.write()
    return newProject
  }

  static async addWorkExperience(experience) {
    await db.read()
    db.data.workExperience.push(experience)
    await db.write()
    return experience
  }

  static async addCertificate(certificate) {
    await db.read()
    db.data.certificates.push(certificate)
    await db.write()
    return certificate
  }

  // Update entries
  static async updateProject(projectNum, updates) {
    await db.read()
    const index = db.data.projects.findIndex(p => p.projectNum === projectNum)
    if (index !== -1) {
      db.data.projects[index] = { ...db.data.projects[index], ...updates }
      await db.write()
      return db.data.projects[index]
    }
    return null
  }

  static async updateMission(missionData) {
    await db.read()
    db.data.mission = { ...db.data.mission, ...missionData }
    await db.write()
    return db.data.mission
  }

  // Delete entries
  static async deleteProject(projectNum) {
    await db.read()
    const index = db.data.projects.findIndex(p => p.projectNum === projectNum)
    if (index !== -1) {
      const deleted = db.data.projects.splice(index, 1)[0]
      await db.write()
      return deleted
    }
    return null
  }

  static async deleteCertificate(title) {
    await db.read()
    const index = db.data.certificates.findIndex(c => c.title === title)
    if (index !== -1) {
      const deleted = db.data.certificates.splice(index, 1)[0]
      await db.write()
      return deleted
    }
    return null
  }
}

export default db
