import { useContext, useEffect, useState } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { AllTurniersType, TeamType } from "../global/types";
import { GenerateTable } from "./generateTable";

interface TurnierIndexProp {
  index: number;
}

export const TurnierTable: React.FC<TurnierIndexProp> = ({ index }) => {
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);
  const [teamPairs, setTeamPairs]: TeamType = useState(
    [] || localStorage.getItem(JSON.parse("teamPairs"))
  );

  // Data of the current Turnier
  const currentTurnierInfo = allTurniers[index];
  const currentTurnier = allTurniers[index].turnier;
  const currentTeams = allTurniers[index].teams;

  useEffect(() => {
    //!currentTurnierInfo.round1[0] && createPairs(currentTurnierInfo.round1[0], currentTeams);
  }, []);

  // Auslagern! behebt update Fehler
  // mini setMini bool {{mini ? small : normal}}

  const updateWins = (e, matches, pair, team) => {
    matches[pair][team].wins = e.target.value;

    // Filter Teams for the next Matches
    const nextTeams = matches
      .map((pair) => {
        // WinnerTeam of pair
        const winningTeam = pair.reduce((prevTeam, currentTeam) => {
          return currentTeam.wins > prevTeam.wins ? currentTeam : prevTeam;
        });

        if (winningTeam.wins > Math.floor(currentTurnier.bestOf / 2)) {
          return winningTeam;
        } else {
          return null;
        }
      })
      .filter((team) => team !== null);

    console.log("prepare Round-2", nextTeams);
    // setAllTurniers([...allTurniers, (allTurniers[index].round2 = nextTeams)]);
  };

  return (
    <>
      {/* Console.log true but render false: Can not read undefined (teamName...) */}
      {/* {secondGames[index] && (
        <GenerateTable matches={secondGames} updateWins={updateWins} />
      )} */}
      {currentTurnierInfo.round1[0] && (
        <GenerateTable
          matches={currentTurnierInfo.round1}
          updateWins={updateWins}
        />
      )}
    </>
  );
};

// Later

// if (
//   teams.length === 8 ||
//   (teams.length > 13 && teams.length <= 16) ||
//   (teams.length > 27 && teams.length <= 32)
// ) {
//   console.log("Starte Turnier!");
// } else if (
//   (teams.length > 8 && teams.length <= 13) ||
//   (teams.length > 16 && teams.length <= 27)
// ) {
//   console.log("Starte Vorrunde!");
// }
