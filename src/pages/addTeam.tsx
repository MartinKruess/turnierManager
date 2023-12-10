import { useContext, useEffect } from "react";
import { AllTurniersContext, TurnierContext } from "../global/turnierProvider";
import { TeamPreview } from "../comps/teamPreview";
import { AllTurniersType, TurnierDataType } from "../global/types";

export const AddTeam = () => {
  const { turnierData, setTurnierData } = useContext(TurnierContext);
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

  useEffect(() => {
    localStorage.setItem("turnierData", JSON.stringify(turnierData));
    console.log("all", allTurniers);
  }, [turnierData]);
  const teamsize = turnierData.turnier.teamsize;

  useEffect(() => {
    localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
  }, [allTurniers]);

  const createTeam = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    const newTeam = {
      teamName: formElement.teamName.value,
      wins: 0,
      player1: {
        playerName: formElement.playerName1.value,
        playerRank: formElement.playerRank1.value,
        goals: 0,
        assists: 0,
        defs: 0,
      },
      player2: {
        playerName:
          teamsize === "duo" || teamsize === "trio"
            ? formElement.playerName2.value
            : "",
        playerRank:
          teamsize === "duo" || teamsize === "trio"
            ? formElement.playerRank2.value
            : "",
        goals: 0,
        assists: 0,
        defs: 0,
      },
      player3: {
        playerName: teamsize === "trio" ? formElement.playerName3.value : "",
        playerRank: teamsize === "trio" ? formElement.playerRank3.value : "",
        goals: 0,
        assists: 0,
        defs: 0,
      },
    };
    turnierData.teams.length < 32 &&
      setTurnierData({
        ...turnierData,
        teams: [...turnierData.teams, newTeam],
      });
  };

  const openTurnier = () => {
    // mix Teams
    const teams = turnierData.teams;
    teams.sort(() => Math.random() - 0.5);
    turnierData.round1 = teams;

    if (allTurniers === null) {
      setAllTurniers([turnierData]);
    } else {
      setAllTurniers([...allTurniers, turnierData]);
    }
    setTurnierData({
      turnier: {
        turnierName: "",
        playerStats: false,
        startDate: "",
        teamsize: "",
        status: false,
        bestOf: 0,
      },
      teams: [],
      round1: [],
      round2: [],
      round3: [],
      round4: [],
      round5: [],
      winner: [],
    });
    localStorage.removeItem("turnierData");
    localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
  };

  return (
    <main>
      {turnierData.turnier.turnierName ? (
        <section className="teamSection">
          {turnierData.teams.length === 32 ? (
            <h2>Das Turnier ist voll!</h2>
          ) : (
            <form className="newTeam" onSubmit={(e) => createTeam(e)}>
              <input type="text" name="teamName" placeholder="Teamname" />
              <input
                type="text"
                name="playerName1"
                className="formSpace"
                placeholder="Playername 1"
              />
              <input
                type="text"
                name="playerRank1"
                placeholder="Playerrank 1"
              />
              {(teamsize === "duo" || teamsize === "trio") && (
                <>
                  <input
                    type="text"
                    name="playerName2"
                    className="formSpace"
                    placeholder="Playername 2"
                  />
                  <input
                    type="text"
                    name="playerRank2"
                    placeholder="Playerrank 2"
                  />
                </>
              )}
              {teamsize === "trio" && (
                <>
                  <input
                    type="text"
                    name="playerName3"
                    className="formSpace"
                    placeholder="Playername 3"
                  />
                  <input
                    type="text"
                    name="playerRank3"
                    placeholder="Playerrank 3"
                  />
                </>
              )}
              <button type="submit">Team anlegen</button>
            </form>
          )}
          <TeamPreview />
        </section>
      ) : (
        <p>
          Um Teams für ein Turnier eintragen zu können muss erst ein neues
          Turnier angelegt werden.
        </p>
      )}
      {turnierData.teams.length >= 8 && (
        <section>
          <button
            title="Nach dem starten des Turnieres ist eine weitere bearbeitung nicht möglich!"
            onClick={() => openTurnier()}
          >
            Alle Teams eingetragen
          </button>
        </section>
      )}
    </main>
  );
};
