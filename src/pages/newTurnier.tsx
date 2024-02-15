import { useState, useEffect, useContext } from "react";
import { TurnierContext } from "../global/turnierProvider";
import { ThemeContext } from "../global/themeProvider";
import { submitHandler } from "../comps/addTurnier/turnierHandler";
import { roundHandler } from "../comps/addTurnier/roundHandler";

export const NewTurnier = () => {
  const [rounds, setRounds] = useState(1);
  const { turnierData, setTurnierData } = useContext(TurnierContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("turnierData", JSON.stringify(turnierData));
  }, [turnierData]);

  useEffect(() => {}, [rounds]);

  return (
    <main>
      {turnierData.turnier.turnierName ? (
        <h2>Die Erstellung des Turniers läuft noch!</h2>
      ) : (
        <form
          onSubmit={(e) =>
            submitHandler(e, rounds, turnierData, setTurnierData)
          }
        >
          <input
            type="text"
            placeholder="Name des Turniers"
            name="turnierName"
            required
          />
          <label htmlFor="startDate">
            Start des Turniers
            <input type="date" name="" id="startDate" required />
          </label>
          <label htmlFor="duo">
            Ones Turnier
            <input type="radio" name="teamsize" value="ones" required />
          </label>
          <label htmlFor="duo">
            Duo Turnier
            <input type="radio" name="teamsize" value="duo" required />
          </label>
          <label htmlFor="trio">
            Trio Turnier
            <input type="radio" name="teamsize" value="trio" required />
          </label>
          <label
            htmlFor="stats"
            title="Ermöglicht die Eingabe der erreichten Tore, Vorlagen und Paraden der einzelnen Spieler."
          >
            Spielerstatistik on/off
            <input type="checkbox" name="playerStats" id="stats" />
          </label>
          <select
            name=""
            id="matches"
            onChange={(e) => roundHandler(e, setRounds)}
          >
            <option value="1">K.O- System</option>
            <option value="3">Best of 3</option>
            {theme === "cod" && <option value="5">Best of 5</option>}
            {theme === "cod" && <option value="7">Bets of 7</option>}
          </select>
          <button type="submit">Turnier erstellen</button>
        </form>
      )}
    </main>
  );
};
