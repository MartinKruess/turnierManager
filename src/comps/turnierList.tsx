import { useContext, useEffect, useState } from "react"
import { AllTurniersContext, TurnierContext } from "../global/turnierProvider"
import { AllTurniersType, TurnierDataType } from "../global/types"

export const TurnierList = ({setIndex, setOpenTurnier}) => {
    const {allTurniers}: AllTurniersType = useContext(AllTurniersContext)

    useEffect(() => {}, [allTurniers])

    const showTurnier = (i: number) => {
        setOpenTurnier(true)
        setIndex(i)
    }

    return (
        <section className="turnierListContainer">
            {/* <article className="tableContainer">
                {teamPairs.map((teams, i) => <TablePair key={i} />)}
            </article> */}
            <article className="topRow">
                <div>Turniername</div>
                <div>Teams</div>
                <div>Teamgröße</div>
                <div>Best of</div>
                <div>Startet am</div>
                <div>Starten</div>
            </article>
            {allTurniers.map((turnier: TurnierDataType, i: number) => {
                return(
                    <article key={i} className="row">
                        <div>{turnier.turnier.turnierName}</div>
                        <div>{turnier.teams.length}</div>
                        <div>{turnier.turnier.teamsize}</div>
                        <div title="vor Viertelfinale / ab Viertelfinale">{turnier.turnier.bestOf}/{turnier.turnier.bestOf + 2}</div>
                        <div>{String(turnier.turnier.startDate)}</div>
                        <div className="startBTN" onClick={() => showTurnier(i)}>Turnier Starten</div>
                    </article>
                )
            })}
        </section>
    )
}