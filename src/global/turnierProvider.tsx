import { createContext, useContext, useEffect, useState } from "react";
import {
  AllTurnierDataType,
  AllTurniersType,
  ProviderProps,
  TurnierDataType,
} from "./types";

export const TurnierContext = createContext<TurnierDataType | null>(null);
export const AllTurniersContext = createContext<AllTurniersType | null>(null);

export const TurnierProvider: React.FC<ProviderProps> = ({ children }) => {
  const [turnierData, setTurnierData] = useState<TurnierDataType>({
    turnier: {
      turnierName: "",
      playerStates: false,
      startDate: "",
      teamsize: "",
      status: false,
      bestOf: 0,
    },
    teams: [],
    round1: [],
    round2: [],
    round3: [],
    round4: [],
    round5: [],
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
    <TurnierContext.Provider
      value={{ turnierData, setTurnierData } as AllTurnierDataType}
    >
      {children}
    </TurnierContext.Provider>
  );
};

export const AllTurniersProvider: React.FC<ProviderProps> = ({ children }) => {
  const [allTurniers, setAllTurniers] = useState<AllTurniersType>([]);

  useEffect(() => {
    const turnierDataStr = localStorage.getItem("allTurniers");
    const allTurnierDataLS: AllTurniersType = JSON.parse(turnierDataStr);
    setAllTurniers(allTurnierDataLS);
  }, []);

  return (
    <AllTurniersContext.Provider value={{ allTurniers, setAllTurniers }}>
      {children}
    </AllTurniersContext.Provider>
  );
};
