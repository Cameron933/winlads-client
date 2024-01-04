import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshCount, setRefreshCount] = useState(true);

  const refresh = () => {
    setRefreshCount((prev) => !prev);
  };

  return (
    <RefreshContext.Provider value={{ refreshCount, refresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error('useRefresh must be used within a RefreshProvider');
  }
  return context;
};
