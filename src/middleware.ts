import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get('Accept') || '';
  const response = NextResponse.next();

  // 1. GEO Content Negotiation: acceptmarkdown.com compliance
  // Always include Accept in the Vary header so CDNs cache markdown/html separately.
  response.headers.set('Vary', 'Accept, Accept-Encoding');

  // If an AI agent requests markdown from the root, serve the llms.txt index natively
  if (acceptHeader.includes('text/markdown') && request.nextUrl.pathname === '/') {
    const rewriteUrl = new URL('/llms.txt', request.url);
    const rewriteRes = NextResponse.rewrite(rewriteUrl);
    rewriteRes.headers.set('Vary', 'Accept, Accept-Encoding');
    rewriteRes.headers.set('Content-Type', 'text/markdown; charset=utf-8');
    return rewriteRes;
  }

  return response;
}

export const config = {
  // Apply to all routes except API, static files, and images
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.txt$|.*\\.png$).*)',
};
