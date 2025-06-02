import { NextResponse } from 'next/server';
import { PortfolioData, initDatabase } from '../../lib/database.js';

// Initialize database on first load
await initDatabase();

export async function GET() {
  try {
    const workExperience = await PortfolioData.getWorkExperience();
    return NextResponse.json(workExperience);
  } catch (error) {
    console.error('Error fetching work experience:', error);
    return NextResponse.json(
      { error: 'Failed to fetch work experience' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const experienceData = await request.json();
    const newExperience = await PortfolioData.addWorkExperience(experienceData);
    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    console.error('Error creating work experience:', error);
    return NextResponse.json(
      { error: 'Failed to create work experience' },
      { status: 500 }
    );
  }
}
