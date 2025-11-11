'use client';

import { useLoading } from '@/components/shared/loading-provider';
import { useCallback } from 'react';

/**
 * Hook personalizado para manejar el estado de loading global
 * Proporciona métodos fáciles para mostrar/ocultar loading en cualquier componente
 */
export const useGlobalLoading = () => {
  const { isLoading, showLoading, hideLoading, setIsLoading } = useLoading();

  /**
   * Ejecuta una función asíncrona mostrando loading automáticamente
   * @param asyncFunction - Función asíncrona a ejecutar
   * @param minDuration - Duración mínima del loading en ms (opcional)
   */
  const withLoading = useCallback(async <T>(
    asyncFunction: () => Promise<T>,
    minDuration: number = 500
  ): Promise<T> => {
    showLoading();
    const startTime = Date.now();

    try {
      const result = await asyncFunction();
      
      // Asegurar duración mínima para mejor UX
      const elapsed = Date.now() - startTime;
      if (elapsed < minDuration) {
        await new Promise(resolve => setTimeout(resolve, minDuration - elapsed));
      }
      
      return result;
    } catch (error) {
      throw error;
    } finally {
      hideLoading();
    }
  }, [showLoading, hideLoading]);

  /**
   * Simula un proceso de carga por un tiempo específico
   * @param duration - Duración en milisegundos
   */
  const simulateLoading = useCallback((duration: number = 1000) => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, duration);
  }, [showLoading, hideLoading]);

  /**
   * Muestra loading por un tiempo específico y luego lo oculta
   * @param duration - Duración en milisegundos
   */
  const showLoadingFor = useCallback((duration: number) => {
    return new Promise<void>((resolve) => {
      showLoading();
      setTimeout(() => {
        hideLoading();
        resolve();
      }, duration);
    });
  }, [showLoading, hideLoading]);

  return {
    isLoading,
    showLoading,
    hideLoading,
    setIsLoading,
    withLoading,
    simulateLoading,
    showLoadingFor
  };
};

export default useGlobalLoading;
