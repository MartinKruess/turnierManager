import { createContext, useContext, useEffect, useState } from "react";
import {
  AllTurnierDataType,
  AllTurniersType,
  ProviderProps,
  TurnierDataType,
} from "./types";

export const TurnierContext = createContext<AllTurnierDataType>(
  {} as AllTurnierDataType
);
export const AllTurniersContext = createContext<AllTurniersType>(
  {} as AllTurniersType
);

// Collection of TurnierData, Teams and Rounds for a single Turnier
export const TurnierProvider: React.FC<ProviderProps> = ({ children }) => {
  const [turnierData, setTurnierData] = useState<TurnierDataType>({
    turnier: {
      turnierName: "",
      playerStats: false,
      startDate: "",
      teamsize: "",
      status: false,
      bestOf: 0,
    },
    teams: [],
    rounds: [[], [], [], [], []],
    winner: [],
  });

  if (!turnierData.turnier) {
    const turnierDataStr = localStorage.getItem("turnierData");
    try {
      const turnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
      console.log("LS", turnierDataLS);
      setTurnierData(turnierDataLS);
    } catch (error) {
      console.error("Error parsing turnierData from localStorage:", error);
    }
  }

  return (
    <TurnierContext.Provider value={{ turnierData, setTurnierData }}>
      {children}
    </TurnierContext.Provider>
  );
};

// Collection of all Turniers
export const AllTurniersProvider: React.FC<ProviderProps> = ({ children }) => {
  const [allTurniers, setAllTurniers] = useState<TurnierDataType[]>([]);

  useEffect(() => {
    const turnierDataStr = localStorage.getItem("allTurniers");
    const allTurnierDataLS: TurnierDataType[] = JSON.parse(turnierDataStr);
    setAllTurniers(allTurnierDataLS);
  }, []);

  return (
    <AllTurniersContext.Provider value={{ allTurniers, setAllTurniers }}>
      {children}
    </AllTurniersContext.Provider>
  );
};
