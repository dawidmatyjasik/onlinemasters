'use client';

import type { PropsWithChildren } from 'react';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface NavigationProviderType {
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  onHover: () => void;
  onLeave: () => void;
}

export const NavigationContext = createContext<NavigationProviderType | undefined>(undefined);

export const useNavigation = () => {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error('Context outside provided');
  }

  return ctx;
};

export function NavigationProvider({ children }: PropsWithChildren) {
  const [isHover, setIsHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [isMobile, setIsMobile] = useState(false);

  const onHover = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsHover(true);
  }, [timeoutId]);

  const onLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsHover(false);
    }, 300);

    setTimeoutId(id);
  }, []);

  const navigationContextValue = useMemo(
    () => ({
      isHover,
      setIsHover,
      onLeave,
      onHover,
      isMobile,
      setIsMobile,
    }),
    [isHover, setIsHover, onLeave, onHover, isMobile, setIsMobile]
  );

  return <NavigationContext.Provider value={navigationContextValue}>{children}</NavigationContext.Provider>;
}
