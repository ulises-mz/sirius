// middleware.ts - Archivo middleware básico para Next.js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simplemente continuar con la petición sin modificaciones
  return NextResponse.next();
}

// Configuración opcional: especifica en qué rutas aplicar el middleware
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
