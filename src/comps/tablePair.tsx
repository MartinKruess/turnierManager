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
  const [secondGames, setSecondGames] = useState([]);
  const turnier = allTurniers[index].turnier;
  const teams = allTurniers[index].teams;

  useEffect(() => {
    !teamPairs[0] && createPairs();
  }, []);

  useEffect(() => {
    console.log("Pairs", teamPairs);
    localStorage.setItem("teamPairs", JSON.stringify(teamPairs));
  }, [teamPairs]);

  useEffect(() => {
    console.log("SecondGames", secondGames);
  }, [secondGames]);

  if (
    teams.length === 8 ||
    (teams.length > 13 && teams.length <= 16) ||
    (teams.length > 27 && teams.length <= 32)
  ) {
    console.log("Starte Turnier!");
  } else if (
    (teams.length > 8 && teams.length <= 13) ||
    (teams.length > 16 && teams.length <= 27)
  ) {
    console.log("Starte Vorrunde!");
  }

  // Auslagern! behebt update Fehler
  // mini setMini bool {{mini ? small : normal}}

  let t = 2;
  const createPairs = () => {
    console.log("TeamPairs", teamPairs);
    if (allTurniers[index] && !teamPairs[0]) {
      const teamsArr = [];
      const currentTeams = allTurniers[index].teams;
      currentTeams.sort(() => Math.random() - 0.5);
      for (let i = 0; i < currentTeams.length; i += t) {
        if (currentTeams[i + 1]) {
          teamsArr.push([currentTeams[i], currentTeams[i + 1]]);
        } else {
          teamsArr.push([currentTeams[i]]);
          // t = t*2
        }
      }
      setTeamPairs(teamsArr);
    }
  };

  let nextTeam = [{ teamName: "test" }];

  const updateWins = (e, pair, team) => {
    teamPairs[pair][team].wins = e.target.value;
    setTeamPairs([...teamPairs]);
    nextTeam = teams.filter(
      (team: TeamType) => team.wins > Math.floor(turnier.bestOf / 2)
    );
    setSecondGames(nextTeam);
  };

  return (
    <>
      {/* Console.log true but render false: Can not read undefined (teamName...) */}
      {/* {secondGames[index] && (
        <GenerateTable matches={secondGames} updateWins={updateWins} />
      )} */}
      {teamPairs[index] && (
        <GenerateTable matches={teamPairs} updateWins={updateWins} />
      )}
    </>
  );
};
