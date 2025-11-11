'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Cargando');

  // Animación de progreso simulado
  useEffect(() => {
    if (isLoading) {
      setShow(true);
      setProgress(0);
      
      // Detectar si es HMR (desarrollo) o navegación normal
      const isDevelopment = process.env.NODE_ENV === 'development';
      if (isDevelopment) {
        setLoadingText('Actualizando');
        // Para HMR, progreso más rápido
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 85) return prev;
            return prev + Math.random() * 20;
          });
        }, 100);

        const textInterval = setInterval(() => {
          setLoadingText(prev => {
            if (prev === 'Actualizando') return 'Actualizando.';
            if (prev === 'Actualizando.') return 'Actualizando..';
            if (prev === 'Actualizando..') return 'Actualizando...';
            return 'Actualizando';
          });
        }, 300);

        return () => {
          clearInterval(progressInterval);
          clearInterval(textInterval);
        };
      } else {
        setLoadingText('Cargando');
        // Para navegación normal, progreso más lento
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 15;
          });
        }, 200);

        const textInterval = setInterval(() => {
          setLoadingText(prev => {
            if (prev === 'Cargando') return 'Cargando.';
            if (prev === 'Cargando.') return 'Cargando..';
            if (prev === 'Cargando..') return 'Cargando...';
            return 'Cargando';
          });
        }, 500);

        return () => {
          clearInterval(progressInterval);
          clearInterval(textInterval);
        };
      }
    } else {
      // Completar la barra de progreso antes de ocultar
      setProgress(100);
      const timer = setTimeout(() => {
        setShow(false);
        setProgress(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show && !isLoading) return null;

  // Barra de progreso fija en la parte inferior de la página
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[9999]"
      style={{ height: '4px' }}
    >
      <div className="w-full h-full bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
