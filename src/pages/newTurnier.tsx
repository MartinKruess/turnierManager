import { useState, useEffect, useContext } from "react"
import { TurnierContext } from "../global/turnierProvider"
import { TurnierDataType } from "../global/types"

export const NewTurnier = () => {
    const [rounds, setRounds] = useState(1)
    const {turnierData, setTurnierData}: TurnierDataType = useContext(TurnierContext)
    console.log(turnierData)

    useEffect(() => {
        localStorage.setItem('turnierData', JSON.stringify(turnierData))
    }, [turnierData])
    
    useEffect(() => {}, [rounds])

    const roundHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const formElement = e.target as HTMLFormElement;
        if(formElement.value > 0 && formElement.value < 6){
            setRounds(Number(formElement.value))
        }   
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const formElement = e.target as HTMLFormElement;
        console.log(formElement.teamsize.value)
        const turnier = {
            turnierName: formElement.turnierName.value,
            startDate: formElement.startDate.value,
            teamsize: formElement.teamsize.value,
            playerStats: formElement.playerStats.checked,
            bestOf: Number(formElement.bestOf.value),
            status: true,
        }
        if(!turnierData[0]){
            setTurnierData({...turnierData, turnier: turnier})
        }
    }

    return(
        <main>
        {turnierData.turnier.turnierName
        ? (<h2>Die Erstellung des Turniers läuft noch!</h2>)
        : (<form onSubmit={(e) => submitHandler(e)}>
            <input type="text" placeholder="Name des Turniers" name="turnierName" required />
            <label htmlFor="startDate">Start des Turniers
                <input type="date" name="" id="startDate" required />
            </label>
            <label htmlFor="duo">Ones Turnier
                <input type="radio" name="teamsize" value="ones" />
            </label>
            <label htmlFor="duo">Duo Turnier
                <input type="radio" name="teamsize" value="duo" />
            </label>
            <label htmlFor="trio">Trio Turnier
                <input type="radio" name="teamsize" value="trio" />
            </label>
            <label htmlFor="stats" title="Ermöglicht die Eingabe der erreichten Tore, Vorlagen und Paraden der einzelnen Spieler." >Spielerstatistik on/off
                <input type="checkbox" name="playerStats" id="stats" />
            </label>
            <label htmlFor="bestOf"
            title="1: Ko-System ab Viertelfinale best of 3 | 3: Best of 3 ab Viertelfinale best of 5 |  5: Best of 5 ab Viertelfinale best of 7">Best of {rounds} ab Viertelfinale best of {rounds + 2}
            <input type="number" name="" id="bestOf" onChange={(e) => roundHandler(e)} value={rounds} />
            </label>
            <button type="submit">Turnier erstellen</button>
        </form>)
        }
        </main>
    )
}