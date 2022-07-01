import { createContext } from 'react';


export const DarkModeContext: React.Context<() => void> = createContext(() => {});
