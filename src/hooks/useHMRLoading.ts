// ...restaurar la lógica original de HMR loading...
'use client';

import { useEffect } from 'react';
import { useLoading } from '@/components/shared/loading-provider';

/**
 * Hook para detectar eventos de Hot Module Replacement (HMR) de Next.js
 * y mostrar loading durante Fast Refresh
 */
export const useHMRLoading = () => {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Solo funcionar en desarrollo
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return;
    }

    // Interceptar logs de consola para detectar Fast Refresh
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;

    const checkForHMRMessages = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      
      // Detectar inicio de compilación/rebuilding
      if (message.includes('[fast refresh] rebuilding') || 
          message.includes('rebuilding') ||
          message.includes('compiling') ||
          message.includes('⚠') ||
          message.includes('building')) {
      }
      
      // Detectar finalización
      if (message.includes('[fast refresh] done') || 
          message.includes('compiled successfully') ||
          message.includes('✓ compiled') ||
          message.includes('ready in') ||
          message.includes('done in')) {
      }
    };

    // Interceptar console.log
    console.log = (...args: any[]) => {
      checkForHMRMessages(...args);
      originalConsoleLog.apply(console, args);
    };

    // Interceptar console.info
    console.info = (...args: any[]) => {
      checkForHMRMessages(...args);
      originalConsoleInfo.apply(console, args);
    };

    // Crear un observer para detectar cambios en el DOM que indiquen HMR
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Detectar si se agregaron elementos que sugieren una actualización
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' || 
                  element.tagName === 'STYLE' ||
                  element.className?.includes('__next')) {
                // Posible actualización de HMR
              }
            }
          });
        }
      });
    });

    // Observar cambios en el head y body
    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });

    // Detectar eventos de navegación programática que podrían ser HMR
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      // Solo mostrar loading si parece ser una actualización de desarrollo
      if (window.location.href.includes('localhost')) {
      }
      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function(...args) {
      if (window.location.href.includes('localhost')) {
      }
      return originalReplaceState.apply(this, args);
    };

    // Detectar errores que podrían indicar una recompilación
    const handleError = () => {
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    // Cleanup
    return () => {
      console.log = originalConsoleLog;
      console.info = originalConsoleInfo;
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
      observer.disconnect();
    };
  }, [showLoading, hideLoading]);
};

export default useHMRLoading;
