import { createContext, useState } from "react"
import { ProviderProps } from "./types";

// interface Team {
//     teamName: string;
//     player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
//     player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
// }

// interface TeamsType {
//     teams: Team[],
// }

export const TurnierContext = createContext<any>(null)

export const TurnierProvider:React.FC<ProviderProps> = ({children}) => {
    const [turnierData, setTurnierData] = useState({
        turnier: {},
        teams: []
    })

    return(
        <TurnierContext.Provider value={{turnierData, setTurnierData}}>
            {children}
        </TurnierContext.Provider>
    )
}