import { NextResponse } from 'next/server';
import { PortfolioData, initDatabase } from '../../lib/database.js';

// Initialize database on first load
await initDatabase();

export async function GET() {
  try {
    const featuredProjects = await PortfolioData.getFeaturedProjects();
    return NextResponse.json(featuredProjects);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured projects' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const projectData = await request.json();
    const newProject = await PortfolioData.addFeaturedProject(projectData);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating featured project:', error);
    return NextResponse.json(
      { error: 'Failed to create featured project' },
      { status: 500 }
    );
  }
}
