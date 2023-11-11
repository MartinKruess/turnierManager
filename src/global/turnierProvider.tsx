import { createContext, useState } from "react"
import { ProviderProps } from "./types";

interface TeamType {
    teamName: string;
    player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player3: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
}

interface TurnierType {
    turnierName: string;
    playerStates: boolean;
    startDate: Date;
    status: boolean;
    bestOf: number;
}

interface TurnierDataType {
    teams: TeamType[],
    turnier: TurnierType;
}

export const TurnierContext = createContext<TurnierDataType | null >(null)

export const TurnierProvider:React.FC<ProviderProps> = ({children}) => {
    const [turnierData, setTurnierData] = useState({
        turnier: {
            turnierName: "",
            playerStates: false,
            startDate: new Date(),
            status: false,
            bestOf: 0,
        },
        teams: []
    })

    const turnierDataStr = localStorage.getItem('turnierData')
    if(turnierDataStr && !turnierData.turnier.turnierName){
        try {
            const turnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
            console.log("controll", turnierDataLS)
            setTurnierData(turnierDataLS);
        } catch (error) {
            console.error('Error parsing turnierData from localStorage:', error);
        }
    }

    return(
        <TurnierContext.Provider value={{turnierData, setTurnierData}}>
            {children}
        </TurnierContext.Provider>
    )
}