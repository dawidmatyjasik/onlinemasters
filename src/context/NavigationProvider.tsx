import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface NavigationProvider {
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
  onHover: () => void;
  onLeave: () => void;
}

export const NavigationContext = createContext<NavigationProvider | undefined>(
  undefined
);

export const useNavigation = () => {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("Context outside provided");
  }

  return ctx;
};

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [isHover, setIsHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

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
    }),
    [isHover, setIsHover, onLeave, onHover]
  );

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
