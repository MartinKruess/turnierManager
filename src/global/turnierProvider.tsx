import { createContext, useState } from "react"
import { ProviderProps } from "./types";

interface TeamType {
    teamName: string;
    player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player3: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
}

interface TurnierType {
    turnierName: string,
    playerStates: boolean,
    startDate: Date,
    teamsize: string,
    status: boolean,
    bestOf: number,
}

export interface TurnierDataType {
    teams: TeamType[],
    turnier: TurnierType,
}

export interface AllTurniersType {
    allTurniers: TurnierDataType[],
}

export const TurnierContext = createContext<TurnierDataType | null >(null)
export const AllTurniersContext = createContext<TurnierDataType | null >(null)

export const TurnierProvider:React.FC<ProviderProps> = ({children}) => {
    const [turnierData, setTurnierData] = useState<TurnierDataType>({
        turnier: {
            turnierName: "",
            playerStates: false,
            startDate: new Date(),
            teamsize: "",
            status: false,
            bestOf: 0,
        },
        teams: []
    })

    const turnierDataStr = localStorage.getItem('turnierData')
    if(turnierDataStr && !turnierData.turnier.turnierName){
        try {
            const turnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
            turnierDataLS.turnier.startDate = new Date(turnierDataLS.turnier.startDate),
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


export const AllTurniersProvider:React.FC<ProviderProps> = ({children}) => {
    const [allTurniers, setAllTurniers] = useState<AllTurniersType>([])

    //const allTurniersStr = localStorage.getItem('allTurniers')
    // if(allTurniersStr && !turnierData.turnier.turnierName){
    //     try {
    //         const turnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
    //         turnierDataLS.turnier.startDate = new Date(turnierDataLS.turnier.startDate),
    //         setTurnierData(turnierDataLS);
    //     } catch (error) {
    //         console.error('Error parsing turnierData from localStorage:', error);
    //     }
    // }

    return(
        <AllTurniersContext.Provider value={{allTurniers, setAllTurniers}}>
            {children}
        </AllTurniersContext.Provider>
    )
}