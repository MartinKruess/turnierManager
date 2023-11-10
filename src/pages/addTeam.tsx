import { useContext, useEffect, useState } from "react"
import { TablePair } from "../comps/tablePair"
import { createTeam } from "../comps/createTeam"
import { TeamsContext } from "../global/teamProvider"


export const AddTeam = () => {
    const {teams, setTeams} = useContext(TeamsContext)

    useEffect(()=>{    
        console.log(teams)
    }, [teams])

// const arr = [
//     {teamName: "Team1", player1: "a", player2: "b"},
//     {teamName: "Team2",  player1: "a", player2: "b"}, {teamName: "Team3", player1: "a", player2: "b" }, {teamName: "Team4", player1: "a", player2: "b" }, {teamName: "Team5", player1: "a", player2: "b" }, {teamName: "Team6", player1: "a", player2: "b" }, {teamName: "Team7", player1: "a", player2: "b" },
//     {teamName: "Team8", player1: "a", player2: "b" },
//     {teamName: "Team1", player1: "a", player2: "b"},
//     {teamName: "Team2",  player1: "a", player2: "b"}, {teamName: "Team3", player1: "a", player2: "b" }, {teamName: "Team4", player1: "a", player2: "b" }, {teamName: "Team5", player1: "a", player2: "b" }, {teamName: "Team6", player1: "a", player2: "b" }, {teamName: "Team7", player1: "a", player2: "b" },
//     {teamName: "Team8", player1: "a", player2: "b" },
// ]
// arr.sort(() => Math.random() - 0.5)

// const teamPairs = [];
// let t = 2
// const createPairs = () => {
//     for (let i = 0; i < arr.length; i += t) {
//         if( arr[i + 1]){
//             teamPairs.push([arr[i], arr[i + 1]]);
//         }else{
//             teamPairs.push([arr[i]]);
//             t = t*2
//         }
//     }
// }

// console.log(teamPairs)

//onSubmit={() => turnierData}
    return (
        <main>
            <form className="newTeam" onSubmit={(e) => createTeam(e, teams)}>
                <input type="text" name="teamName" placeholder="Teamname" />
                <input type="text" name="playerName1" className="formSpace" placeholder="Playername 1" />
                <input type="text" name="playerRank1" placeholder="Playerrank 1" />
                <input type="text" name="playerName2" className="formSpace" placeholder="Playername 2" />
                <input type="text" name="playerRank2" placeholder="Playerrank 2" />
                <button type="submit">Team anlegen</button>
            </form>
            {/* <article className="tableContainer">
                {teamPairs.map((teams, i) => <TablePair key={i} />)}
            </article> */}
        </main>
    )
}