import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface TeamType {
  teamName: string;
  wins: number;
  player1: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
  };
  player2: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
  };
  player3: {
    playerName: string;
    playerRank: string;
    goals: number;
    assists: number;
    defs: number;
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
  round1: TeamType[];
  round2: TeamType[];
  round3: TeamType[];
  round4: TeamType[];
  round5: TeamType[];
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
