import { useContext } from "react"
import { TeamsContext } from "../global/teamProvider"

export const createTeam = async (e: React.FormEvent, teams) => {
    e.preventDefault()
    const formElement = e.target as HTMLFormElement;

    const newTeam = {
        teamName: formElement.teamName.value,
        player1: {
            playerName: formElement.playerName1.value,
            playerRank: formElement.playerRank1.value,
            goals: 0,
            assists: 0,
            defs: 0,
        },
        player2: {
            playerName: formElement.playerName2.value,
            playerRank: formElement.playerRank2.value,
            goals: 0,
            assists: 0,
            defs: 0,
        }
    }
    teams.push(newTeam)
    console.log(teams)
    return newTeam
    //setTeams([...teams, newTeam])
}