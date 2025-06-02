import { NextResponse } from 'next/server';
import { PortfolioData, initDatabase } from '../../lib/database.js';

// Initialize database on first load
await initDatabase();

export async function GET() {
  try {
    const mission = await PortfolioData.getMission();
    return NextResponse.json(mission);
  } catch (error) {
    console.error('Error fetching mission:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mission' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const missionData = await request.json();
    const updatedMission = await PortfolioData.updateMission(missionData);
    return NextResponse.json(updatedMission);
  } catch (error) {
    console.error('Error updating mission:', error);
    return NextResponse.json(
      { error: 'Failed to update mission' },
      { status: 500 }
    );
  }
}
