import { useContext, useEffect, useState } from "react"
import { AllTurniersContext, AllTurniersType, TurnierDataType } from "../global/turnierProvider"

export const TurnierList = () => {
    const {allTurniers, setAllTurniers} = useContext(AllTurniersContext)

    useEffect(() => {console.log("ALL", allTurniers)}, [allTurniers])

    return (
        <section>
            {allTurniers.map((turnier: TurnierDataType, i: number) => {
                return(
                    <article key={i}>
                        {turnier.turnierName}
                    </article>
                )
            })}
        </section>
    )
}