import { useContext, useEffect} from "react"
import { TurnierContext } from "../global/turnierProvider"
import { TeamPreview } from "../comps/teamPreview"


export const AddTeam = () => {
    const {turnierData, setTurnierData} = useContext(TurnierContext)

    useEffect(()=>{    
        localStorage.setItem('turnierData', JSON.stringify(turnierData))
    }, [turnierData])


    const createTeam = (e: React.FormEvent) => {
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
            },
            player3: {
                playerName: formElement.playerName3.value,
                playerRank: formElement.playerRank3.value,
                goals: 0,
                assists: 0,
                defs: 0,
            }
        }
        turnierData.teams.length < 32 && setTurnierData({...turnierData, teams: [...turnierData.teams, newTeam]})
    }

    // const currentTeams = [...teams]
// currentTeams.sort(() => Math.random() - 0.5)

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
        <main className="teamSection">
            {turnierData.teams.length === 32 ? (<h2>Das Turnier ist voll!</h2>)
            : (<form className="newTeam" onSubmit={(e) => createTeam(e)}>
                <input type="text" name="teamName" placeholder="Teamname" />
                <input type="text" name="playerName1" className="formSpace" placeholder="Playername 1" />
                <input type="text" name="playerRank1" placeholder="Playerrank 1" />
                <input type="text" name="playerName2" className="formSpace" placeholder="Playername 2" />
                <input type="text" name="playerRank2" placeholder="Playerrank 2" />
                <input type="text" name="playerName3" className="formSpace" placeholder="Playername 3" />
                <input type="text" name="playerRank3" placeholder="Playerrank 3" />
                <button type="submit">Team anlegen</button>
            </form>)}
            <TeamPreview />
            {/* <article className="tableContainer">
                {teamPairs.map((teams, i) => <TablePair key={i} />)}
            </article> */}
        </main>
    )
}