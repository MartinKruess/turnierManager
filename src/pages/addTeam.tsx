import { useContext, useEffect} from "react"
import { AllTurniersContext, TurnierContext } from "../global/turnierProvider"
import { TeamPreview } from "../comps/teamPreview"
import { AllTurniersType } from "../global/types"


export const AddTeam = () => {
    const { turnierData, setTurnierData } = useContext(TurnierContext)
    const { allTurniers, setAllTurniers }: AllTurniersType = useContext(AllTurniersContext)

    useEffect(()=>{    
        localStorage.setItem('turnierData', JSON.stringify(turnierData))
    }, [turnierData])
    const teamsize = turnierData.turnier.teamsize

    useEffect(() => {turnierData},[allTurniers])


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
                playerName: teamsize === 'duo' || teamsize === 'trio' ? formElement.playerName2.value : "",
                playerRank: teamsize === 'duo' || teamsize === 'trio' ? formElement.playerRank2.value : "",
                goals: 0,
                assists: 0,
                defs: 0,
            },
            player3: {
                playerName: teamsize === 'trio' ? formElement.playerName3.value : "",
                playerRank: teamsize === 'trio' ? formElement.playerRank3.value : "",
                goals: 0,
                assists: 0,
                defs: 0,
            }
        }
        turnierData.teams.length < 32 && setTurnierData({...turnierData, teams: [...turnierData.teams, newTeam]})
    }

    const openTurnier = () => {
        setAllTurniers([...allTurniers, turnierData])
        setTurnierData({
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
        localStorage.removeItem('turnierData')
    }

    return (
        <main >
            <section className="teamSection">
            {turnierData.teams.length === 32 ? (<h2>Das Turnier ist voll!</h2>)
            : (<form className="newTeam" onSubmit={(e) => createTeam(e)}>
                <input type="text" name="teamName" placeholder="Teamname" />
                <input type="text" name="playerName1" className="formSpace" placeholder="Playername 1" />
                <input type="text" name="playerRank1" placeholder="Playerrank 1" />
                {(teamsize === 'duo' || teamsize === 'trio') && <>
                    <input type="text" name="playerName2" className="formSpace" placeholder="Playername 2" />
                    <input type="text" name="playerRank2" placeholder="Playerrank 2" />
                </>}
                {(teamsize === 'trio') && <>
                    <input type="text" name="playerName3" className="formSpace" placeholder="Playername 3" />
                    <input type="text" name="playerRank3" placeholder="Playerrank 3" />
                </>}
                <button type="submit">Team anlegen</button>
            </form>)}
            <TeamPreview />
            </section>
            {turnierData.teams.length >= 8 &&
            <section>
                <button title="Nach dem starten des Turnieres ist eine weitere bearbeitung nicht möglich!" onClick={() => openTurnier()}>Alle Teams eingetragen</button>
            </section>}
            {/* <article className="tableContainer">
                {teamPairs.map((teams, i) => <TablePair key={i} />)}
            </article> */}
        </main>
    )
}