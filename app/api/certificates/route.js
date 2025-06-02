import { NextResponse } from 'next/server';
import { PortfolioData, initDatabase } from '../../lib/database.js';

// Initialize database on first load
await initDatabase();

export async function GET() {
  try {
    const certificates = await PortfolioData.getCertificates();
    return NextResponse.json(certificates);
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch certificates' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const certificateData = await request.json();
    const newCertificate = await PortfolioData.addCertificate(certificateData);
    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    console.error('Error creating certificate:', error);
    return NextResponse.json(
      { error: 'Failed to create certificate' },
      { status: 500 }
    );
  }
}
