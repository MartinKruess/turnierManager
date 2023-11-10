import { ReactNode, createContext, useEffect, useState } from "react"
import { ProviderProps } from "./types";

// interface Team {
//     teamName: string;
//     player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
//     player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
// }

// interface TeamsType {
//     teams: Team[],
// }

export const TeamsContext = createContext<any>(null)

export const TeamProvider:React.FC<ProviderProps> = ({children}) => {
    const [teams, setTeams] = useState([])

    console.log("context", teams)

    return(
        <TeamsContext.Provider value={{teams, setTeams}}>
            {children}
        </TeamsContext.Provider>
    )
}