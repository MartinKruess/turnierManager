import { createContext, useState } from "react"
import { ProviderProps } from "./types";

export const TeamsContext = createContext<any>(null)

export const TeamProvider:React.FC<ProviderProps> = ({children}) => {
    const [teams, setTeams] = useState([])

    return(
        <TeamsContext.Provider value={{teams, setTeams}}>
            {children}
        </TeamsContext.Provider>
    )
}