import { useState } from "react"

export const NewTurnier = () => {
    const [rounds, setRounds] = useState(1)
    return(
        <main>
        <form >
            <input type="text" placeholder="Name des Turniers" />
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
                <input type="checkbox" name="" id="stats" />
            </label>
            <label htmlFor="qualification" title="Ermittelt die besten 4, 8 oder 16 Teams, je nach Teilnehmeranzahl. Anschließend startet das reguläre Turnierformat." >Vorrunde on/off
                <input type="checkbox" name="" id="qualification" />
            </label>
            <label htmlFor="maxGames" title="Keine Angabe: Es wird so oft gespielt wie es Gegner gibt. Die 4, 8 oder 16 Teams mit den meisten Siegen kommen weiter.">
                max. Rundenanzahl begrenzen
                <input type="number" placeholder="" id="maxGames" />
            </label>
            <label htmlFor="bestOf"
            title="1: Ko-System ab Viertelfinale best of 3 | 3: Best of 3 ab Viertelfinale best of 5 |  5: Best of 5 ab Viertelfinale best of 7">Best of ...
            <input type="number" name="" id="bestOf" value={rounds} />
            </label>
            <button type="submit">Turnier erstellen</button>
        </form>
        </main>
    )
}