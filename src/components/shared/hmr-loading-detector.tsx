'use client';

import { useEffect } from 'react';
import { useLoading } from '@/components/shared/loading-provider';

/**
 * Componente que detecta eventos de Fast Refresh de Next.js
 * Se debe incluir solo en desarrollo
 */
const HMRLoadingDetector = () => {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Solo funcionar en desarrollo
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Interceptar console.log para detectar mensajes de Fast Refresh
    const originalLog = console.log;
    
    console.log = function(...args: any[]) {
      const message = args.join(' ');
      
      // Detectar "[Fast Refresh] rebuilding"
      if (message.includes('[Fast Refresh] rebuilding')) {
        showLoading();
      }
      
      // Detectar "[Fast Refresh] done in XXXms"
      if (message.includes('[Fast Refresh] done in')) {
        setTimeout(() => {
          hideLoading();
        }, 200);
      }
      
      // Detectar "○ Compiling"
      if (message.includes('○ Compiling')) {
        showLoading();
      }
      
      // Detectar "✓ Compiled"
      if (message.includes('✓ Compiled')) {
        setTimeout(() => {
          hideLoading();
        }, 200);
      }

      // Llamar al console.log original
      originalLog.apply(console, args);
    };

    // Cleanup: restaurar console.log original
    return () => {
      console.log = originalLog;
    };
  }, [showLoading, hideLoading]);

  return null; // Este componente no renderiza nada
};

export default HMRLoadingDetector;
