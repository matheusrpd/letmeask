import { ReactNode } from 'react';

import { AuthContextProvider } from './AuthContext';

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthContextProvider>
    {children}
  </AuthContextProvider>
);