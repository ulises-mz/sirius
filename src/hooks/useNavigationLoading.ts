'use client';

import { useRouter } from 'next/navigation';
import { useLoading } from '@/components/shared/loading-provider';
import { useCallback } from 'react';

export const useNavigationLoading = () => {
  const router = useRouter();
    const { setIsLoading } = useLoading();

  const navigateWithLoading = useCallback((url: string, options?: { replace?: boolean }) => {
    setIsLoading(true);
    
    if (options?.replace) {
      router.replace(url);
    } else {
      router.push(url);
    }
  }, [router, setIsLoading]);

  const refreshWithLoading = useCallback(() => {
    setIsLoading(true);
    router.refresh();
  }, [router, setIsLoading]);

  return {
    navigateWithLoading,
    refreshWithLoading,
    setIsLoading
  };

};
