import { createContext, useContext, useState } from "react"
import { AllTurnierDataType, AllTurniersType, ProviderProps, TurnierDataType } from "./types";

export const TurnierContext = createContext<TurnierDataType | null >(null)
export const AllTurniersContext = createContext<AllTurniersType | null >(null)

export const TurnierProvider:React.FC<ProviderProps> = ({children}) => {
    const [turnierData, setTurnierData] = useState<AllTurnierDataType>({
        turnier: {
            turnierName: "",
            playerStates: false,
            startDate: "",
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


    if(!allTurniers[0] && localStorage.getItem('allTurniers')){
        const turnierDataStr = localStorage.getItem('allTurniers')
        try {
            const allTurnierDataLS: TurnierDataType = JSON.parse(turnierDataStr);
            setAllTurniers(allTurnierDataLS);
        } catch (error) {
            setAllTurniers([])
        }
    }

    return(
        <AllTurniersContext.Provider value={{allTurniers, setAllTurniers}}>
            {children}
        </AllTurniersContext.Provider>
    )
}