import { NextResponse } from 'next/server';
import { PortfolioData, initDatabase } from '../../lib/database.js';

// Initialize database on first load
await initDatabase();

export async function GET() {
  try {
    const projects = await PortfolioData.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const projectData = await request.json();
    const newProject = await PortfolioData.addProject(projectData);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
