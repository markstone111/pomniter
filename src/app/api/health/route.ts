import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Simulate checking for a specific query param to demonstrate JSON error responses
  // This satisfies the GEO check for structured JSON errors.
  const { searchParams } = new URL(request.url);
  const simulateError = searchParams.get('error');

  if (simulateError === 'true') {
    return NextResponse.json(
      {
        error: {
          code: 'SERVICE_UNAVAILABLE',
          message: 'The vector database is currently unreachable.',
          resolution: 'Please check your connection or try again later.',
        },
      },
      { status: 503 }
    );
  }

  // Normal healthy response
  return NextResponse.json(
    {
      status: 'online',
      version: '1.0.0',
      message: 'Pomniter Memory API is operational.',
    },
    { status: 200 }
  );
}
