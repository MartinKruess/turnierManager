import { useContext } from "react"
import { TurnierContext } from "../global/turnierProvider"

export const TeamPreview = () => {
    const {turnierData} = useContext(TurnierContext)
    return(
        <div className="teamPreview">
            {turnierData.teams.map((team, i)=><p key={i}>{team.teamName}</p>)}
        </div>
    )
}