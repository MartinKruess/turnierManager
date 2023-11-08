import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null)

// :React.FC
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('')
    console.log(theme)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}