import { useContext, useEffect, useState } from "react"
import { AllTurniersContext, TurnierContext } from "../global/turnierProvider"
import { AllTurniersType, TurnierDataType } from "../global/types"

export const TurnierList = () => {
    const {allTurniers}: AllTurniersType = useContext(AllTurniersContext)

    useEffect(() => {console.log("ALL", allTurniers)}, [allTurniers])

    return (
        <section className="turnierListContainer">
            <article className="topRow">
                        <div>Turniername</div>
                        <div>Teams</div>
                        <div>Teamgröße</div>
                        <div>Rundenanzahl</div>
                        <div>Startet am</div>
                        <div>Starten</div>
                    </article>
            {allTurniers.map((turnier: TurnierDataType, i: number) => {
                return(
                    <article key={i} className="row">
                        <div>{turnier.turnier.turnierName}</div>
                        <div>{turnier.teams.length}</div>
                        <div>{turnier.turnier.teamsize}</div>
                        <div>{turnier.turnier.bestOf}</div>
                        <div>{String(turnier.turnier.startDate)}</div>
                        <div className="startBTN">Turnier Starten</div>
                    </article>
                )
            })}
        </section>
    )
}