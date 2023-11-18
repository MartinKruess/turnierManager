import { createContext, useContext, useEffect, useState } from "react"
import { AllTurniersType, ProviderProps, TurnierDataType } from "./types";



export const TurnierContext = createContext<TurnierDataType | null >(null)
export const AllTurniersContext = createContext<AllTurniersType | null >(null)

// TEST Vllt hilft das ...
// export const useTurnierData = () => {
//     const contextValue = useContext(TurnierContext);
//     if (!contextValue) {
//       throw new Error("useTurnierData must be used within a TurnierProvider");
//     }
//     return contextValue;
//   };

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

    if(!turnierData.turnier){
    const turnierDataStr = localStorage.getItem('turnierData')
        try {
            const turnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
            turnierDataLS.turnier.startDate = new Date(turnierDataLS.turnier.startDate),
            console.log("LS", turnierDataLS)
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

// TEST Vllt hilft das ...
// export const useAllTurniersData = () => {
//     const contextValue = useContext(AllTurniersContext);
//     if (!contextValue) {
//       throw new Error("useTurnierData must be used within a TurnierProvider");
//     }
//     return contextValue;
//   };


export const AllTurniersProvider:React.FC<ProviderProps> = ({children}) => {
    const [allTurniers, setAllTurniers] = useState<AllTurniersType>([])
    const { turnierData } = useContext(TurnierContext)
    
    // if(!allTurniers[0].turnier.turnierName){
    //     const allTurniersStr = localStorage.getItem('allTurniers')
    //     try {
    //         const allTurniersLS: TurnierDataType = JSON.parse(turnierDataStr);
    //         setAllTurniers(allTurniersLS);
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