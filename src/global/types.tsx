import { ReactNode } from "react";

export interface ProviderProps {
    children: ReactNode;
  }

  interface TeamType {
    teamName: string,
    wins: number,
    player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
    player3: { playerName: string, playerRank: string, goals: number, assists: number, defs: number},
}

interface TurnierType {
    turnierName: string,
    playerStates: boolean,
    startDate: string,
    teamsize: string,
    status: boolean,
    bestOf: number,
}

export interface TurnierDataType {
        teams: TeamType[],
        turnier: TurnierType, 
}

export interface AllTurnierDataType {
    turnierData: TurnierDataType,
    setTurnierData: React.Dispatch<React.SetStateAction<TurnierDataType>>
}

export interface AllTurniersType {
    allTurniers: TurnierDataType[],
    setAllTurniers: React.Dispatch<React.SetStateAction<AllTurniersType>>
}