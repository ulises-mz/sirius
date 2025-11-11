

'use client';

import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingScreen from '@/components/shared/loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    // En lugar de lanzar error, devuelve valores por defecto
    return {
      isLoading: false,
      setIsLoading: () => {},
      showLoading: () => {},
      hideLoading: () => {}
    };
  }
  return context;
};

// Hook interno para detectar HMR
const useHMRDetection = (showLoading: () => void, hideLoading: () => void) => {
  useEffect(() => {
    // Solo en desarrollo
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return;
    }

    // Interceptar logs de consola para detectar Fast Refresh
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;

    const checkForHMRMessages = (...args: any[]) => {
      const message = args.join(' ');
      
      // Detectar inicio de Fast Refresh
      if (message.includes('[Fast Refresh] rebuilding') || 
          message.includes('Compiling') ||
          message.includes('○ Compiling') ||
          message.includes('rebuilding')) {
        showLoading();
      }
      
      // Detectar finalización de Fast Refresh
      if (message.includes('[Fast Refresh] done') || 
          message.includes('✓ Compiled') ||
          message.includes('done in') ||
          message.includes('Ready in')) {
        setTimeout(() => hideLoading(), 300);
      }
    };

    console.log = (...args: any[]) => {
      checkForHMRMessages(...args);
      originalConsoleLog.apply(console, args);
    };

    console.info = (...args: any[]) => {
      checkForHMRMessages(...args);
      originalConsoleInfo.apply(console, args);
    };

    return () => {
      console.log = originalConsoleLog;
      console.info = originalConsoleInfo;
    };
  }, [showLoading, hideLoading]);
};

// Componente interno para manejar la lógica de navegación
const NavigationHandler = ({ 
  setIsLoading 
}: { 
  setIsLoading: (loading: boolean) => void 
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Mostrar loading al cambiar de ruta
    setIsLoading(true);
    
    // Tiempo de loading más dinámico
    const minLoadingTime = 600;
    const maxLoadingTime = 1200;
    const loadingTime = Math.random() * (maxLoadingTime - minLoadingTime) + minLoadingTime;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsLoading]);

  return null;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true); // Empezar con loading activo
  const [loadingCount, setLoadingCount] = useState(0);

  // Funciones auxiliares para manejar múltiples requests de loading
  const showLoading = () => {
    setLoadingCount(prev => {
      const newCount = prev + 1;
      if (newCount > 0) setIsLoading(true);
      return newCount;
    });
  };

  const hideLoading = () => {
    setLoadingCount(prev => {
      const newCount = Math.max(0, prev - 1);
      if (newCount === 0) {
        // Pequeño delay para mejor UX
        setTimeout(() => setIsLoading(false), 300);
      }
      return newCount;
    });
  };

  // Usar el hook de detección HMR
  useHMRDetection(showLoading, hideLoading);

  // Manejar loading inicial de la página
  useEffect(() => {
    const handleLoad = () => {
      setLoadingCount(0);
      setIsLoading(false);
    };

    // Si la página ya está cargada
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        
        // También escuchar el evento DOMContentLoaded para una respuesta más rápida
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            setTimeout(handleLoad, 500); // Pequeño delay para que se vea la animación
          });
        }
      }
    }

    return () => {
      if (typeof window !== 'undefined') {

// Removed LoadingProvider and loading context logic
// The component is now simplified and no longer manages loading state.
        window.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  // Interceptar navegación del navegador (botones back/forward)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handlePopState = () => {
      setIsLoading(true);
      setLoadingCount(1);
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Interceptar fetch requests para mostrar loading automáticamente
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      showLoading();
      try {
        const response = await originalFetch(...args);
        hideLoading();
        return response;
      } catch (error) {
        hideLoading();
        throw error;
      }
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  // Interceptar cambios de visibilidad de la página
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Pequeño loading cuando la página vuelve a ser visible
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading, 
      showLoading, 
      hideLoading 
    }}>
      <LoadingScreen isLoading={isLoading} />
      <Suspense fallback={null}>
        <NavigationHandler setIsLoading={setIsLoading} />
      </Suspense>
      {children}
    </LoadingContext.Provider>
  );
};
