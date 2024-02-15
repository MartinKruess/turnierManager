import { useContext, useEffect } from "react";
import { AllTurniersContext, TurnierContext } from "../global/turnierProvider";
import { TeamPreview } from "../comps/addTeam/teamPreview";
import { createTeam } from "../comps/addTeam/addNewTeam";
import { openTurnier } from "../comps/addTeam/addTeamToTurnier";

export const AddTeam = () => {
  const { turnierData, setTurnierData } = useContext(TurnierContext);
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

  const teamsize = turnierData.turnier.teamsize;
  useEffect(() => {
    localStorage.setItem("turnierData", JSON.stringify(turnierData));
  }, [turnierData]);

  useEffect(() => {
    localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
  }, [allTurniers]);

  return (
    <main>
      {turnierData.turnier.turnierName ? (
        <section className="teamSection">
          {turnierData.teams.length === 32 ? (
            <h2 className="newTeam">Das Turnier ist voll!</h2>
          ) : (
            <form
              className="newTeam"
              onSubmit={(e) =>
                createTeam(e, teamsize, turnierData, setTurnierData)
              }
            >
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
            onClick={() =>
              openTurnier(
                turnierData,
                setTurnierData,
                allTurniers,
                setAllTurniers
              )
            }
          >
            Alle Teams eingetragen
          </button>
        </section>
      )}
    </main>
  );
};
