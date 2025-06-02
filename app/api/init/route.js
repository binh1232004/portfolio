import { initDatabase } from '../../lib/database';

export async function POST() {
  try {
    await initDatabase();
    return Response.json({ 
      success: true, 
      message: 'Database initialized successfully' 
    });
  } catch (error) {
    console.error('Database initialization failed:', error);
    return Response.json(
      { 
        success: false, 
        error: 'Failed to initialize database',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ 
    message: 'Use POST method to initialize the database' 
  });
}
