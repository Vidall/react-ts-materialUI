import React, { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextProps {
  children: React.ReactNode
}

interface IDrawerContextData {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void
}

export const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerContextProps> = ( { children } ) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerStatus => !oldDrawerStatus);
  }, []);

  return (

    <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
      { children }
    </DrawerContext.Provider>

  );
};