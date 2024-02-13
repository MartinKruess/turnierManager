import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface TeamType {
  teamName: string;
  wins: number;
  teampoints: number;
  player1: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
    points: number;
  };
  player2: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
    points: number;
  };
  player3: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
    points: number;
  };
}

export interface TurnierType {
  turnierName: string;
  playerStats: boolean;
  startDate: string;
  teamsize: string;
  status: boolean;
  bestOf: number;
}

export interface TurnierDataType {
  teams: TeamType[];
  rounds: TeamType[][];
  winner: TeamType[];
  turnier: TurnierType;
}

export interface AllTurnierDataType {
  turnierData: TurnierDataType;
  setTurnierData: React.Dispatch<React.SetStateAction<TurnierDataType>>;
}

export interface AllTurniersType {
  allTurniers: TurnierDataType[];
  setAllTurniers: React.Dispatch<React.SetStateAction<TurnierDataType[]>>;
}
