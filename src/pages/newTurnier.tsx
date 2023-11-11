import { useState, useEffect, useContext } from "react"
import { TurnierContext } from "../global/turnierProvider"

export const NewTurnier = () => {
    const [rounds, setRounds] = useState(1)
    const {turnierData, setTurnierData} = useContext(TurnierContext)


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
        const turnier = {
            turnierName: formElement.turnierName.value,
            startDate: formElement.startDate.value,
            playerStats: formElement.playerStats.value,
            qualification: formElement.qualification.value,
            qualificationGames: Number(formElement.maxGames.value),
            bestOf: Number(formElement.bestOf.value),
            status: true,
        }
        if(!turnierData[0])[
            setTurnierData({...turnierData, turnier: turnier})
        ]
    }

    return(
        <main>
        {turnierData.turnier.turnierName
        ? (<h2>Die Erstellung des Turniers läuft noch!</h2>)
        : (<form onSubmit={(e) => submitHandler(e)}>
            <input type="text" placeholder="Name des Turniers" name="turnierName" />
            <label htmlFor="startDate">Start des Turniers
                <input type="date" name="" id="startDate" />
            </label>
            <label htmlFor="duo">Duo Turnier
                <input type="radio" name="teamsize" id="duo" />
            </label>
            <label htmlFor="trio">Trio Turnier
                <input type="radio" name="teamsize" id="trio" />
            </label>
            <label htmlFor="stats" title="Ermöglicht die Eingabe der erreichten Tore, Vorlagen und Paraden der einzelnen Spieler." >Spielerstatistik on/off
                <input type="checkbox" name="playerStats" id="stats" />
            </label>
            <label htmlFor="qualification" title="Ermittelt die besten 4, 8 oder 16 Teams, je nach Teilnehmeranzahl. Anschließend startet das reguläre Turnierformat." >Vorrunde on/off
                <input type="checkbox" name="qualification" id="qualification" />
            </label>
            <label htmlFor="maxGames" title="Keine Angabe: Es wird so oft gespielt wie es Gegner gibt. Die 4, 8 oder 16 Teams mit den meisten Siegen kommen weiter.">
                max. Rundenanzahl begrenzen
                <input type="number" id="maxGames" />
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