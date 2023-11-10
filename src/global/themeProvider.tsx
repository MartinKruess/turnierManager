import { createContext, useState } from "react";
import { ProviderProps } from "./types";

export const ThemeContext = createContext<any>(null)


  
  export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('');
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };