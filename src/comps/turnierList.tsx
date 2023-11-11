import { useContext, useEffect, useState } from "react"
import { TurnierContext } from "../global/turnierProvider"

export const TurnierList = () => {
    // const [allTurniers, setAllTurniers] = useState([])
    // const {turnierData} = useContext(TurnierContext)

    // useEffect(() => {

    // }, [allTurniers])

    // localStorage.getItem(turnierData) && setAllTurniers([...allTurniers, localStorage.getItem(turnierData)])

    return (
        <section>
            {/* {allTurniers.map((turnier, i) => {
                return(
                    <article key={i}>
                        {turnier.turnierName}
                    </article>
                )
            })} */}
        </section>
    )
}