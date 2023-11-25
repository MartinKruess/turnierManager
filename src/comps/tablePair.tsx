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
    !currentTurnierInfo.round1[0] &&
      createPairs(currentTurnierInfo.round1[0], currentTeams);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("teamPairs", JSON.stringify(teamPairs));
  // }, [teamPairs]);

  // Auslagern! behebt update Fehler
  // mini setMini bool {{mini ? small : normal}}

  const createPairs = (nr, teams) => {
    let t = 2;
    if (allTurniers[index] && !teamPairs[0]) {
      const teamsArr = [];
      teams.sort(() => Math.random() - 0.5);
      for (let i = 0; i < teams.length; i += t) {
        if (teams[i + 1]) {
          teamsArr.push([teams[i], teams[i + 1]]);
        } else {
          teamsArr.push([teams[i]]);
          // t = t*2
        }
      }
      if (nr === 1) {
        setAllTurniers([
          ...allTurniers,
          (allTurniers[index].round1 = teamsArr),
        ]);
      } else if (nr === 2) {
        setAllTurniers([
          ...allTurniers,
          (allTurniers[index].round2 = teamsArr),
        ]);
      } else if (nr === 3) {
        setAllTurniers([
          ...allTurniers,
          (allTurniers[index].round3 = teamsArr),
        ]);
      } else if (nr === 4) {
        setAllTurniers([
          ...allTurniers,
          (allTurniers[index].round4 = teamsArr),
        ]);
      } else if (nr === 5) {
        setAllTurniers([
          ...allTurniers,
          (allTurniers[index].round5 = teamsArr),
        ]);
      }
    }
  };

  let nextTeams = [];

  const updateWins = (e, pair, team) => {
    currentTurnierInfo.round1[0][pair][team].wins = e.target.value;
    // setTeamPairs([...teamPairs]);
    nextTeams = currentTeams.filter(
      (team: TeamType) => team.wins > Math.floor(currentTurnier.bestOf / 2)
    );
    setAllTurniers([...allTurniers, (allTurniers[index].round2 = nextTeams)]);
  };

  return (
    <>
      {/* Console.log true but render false: Can not read undefined (teamName...) */}
      {/* {secondGames[index] && (
        <GenerateTable matches={secondGames} updateWins={updateWins} />
      )} */}
      {currentTurnierInfo.round1[0] && (
        <GenerateTable
          matches={currentTurnierInfo.round1[0]}
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
