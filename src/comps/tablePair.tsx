import { useContext, useEffect, useState } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { AllTurniersType, TeamType } from "../global/types";
import { GenerateTable } from "./generateTable";
import { Winner } from "./winner";
import { DetailsPanel } from "./detailsPanel";

interface TurnierIndexProp {
  index: number;
}

export const TurnierTable: React.FC<TurnierIndexProp> = ({ index }) => {
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);
  const [openDetails, setOpenDetails] = useState({
    status: false,
    clicked: [],
  });

  // Data of the current Turnier
  const turnierIndex = index;
  const currentTurnier = allTurniers[index];
  const currentRounds = allTurniers[index].rounds;
  const currentData = allTurniers[index].turnier;
  const currentTeams = allTurniers[index].teams;
  const [count, setCount] = useState(0);

  const winHandler = (e, team) => {
    team.wins = e.target.value;
    team.allWins = Number(team.allWins) + Number(e.target.value);
    if (
      currentRounds[count][currentRounds[count].length - 1].wins >
        currentData.bestOf / 2 ||
      currentRounds[count][currentRounds[count].length - 2].wins >
        currentData.bestOf / 2
    ) {
      currentRounds[count + 1] = currentRounds[count].filter((team) => {
        if (team.wins > currentData.bestOf / 2) {
          team.wins = 0;
          return team;
        }
      });
      setCount(count + 1);
      localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
    }
  };

  return (
    <article className="turnierTree">
      {currentRounds.map((round, i) => (
        <div
          className={
            currentRounds[0].length > 13 && currentRounds[0].length <= 16
              ? "pairContainer"
              : "smallPairContainer"
          }
          key={i}
        >
          {round.map((team, i) =>
            i % 2 === 0 ? (
              <div className={`top${i} top`} key={i}>
                <p className="teamName">{team.teamName}</p>
                <input
                  type="text"
                  className="win"
                  onChange={(e) => winHandler(e, team)}
                />
              </div>
            ) : (
              <div className={`bot${i}`}>
                <div className={`top${i} bot`}>
                  <p className="teamName">{team.teamName}</p>
                  <input
                    type="text"
                    className="win"
                    onChange={(e) => winHandler(e, team)}
                  />
                </div>
              </div>
            )
          )}
        </div>
      ))}
      <Winner winner={currentTurnier.winner} />
    </article>
  );
};

//^ Wenn originTeams.length === 8 => max 3 rounds
// round2.length === 2 && !round3[1] ? aktualisieren : winner
//! round 3 winner = winner
//^ Wenn originTeams.length > 13 || originTeams.length === 16 => max 4 rounds
// round3.length === 2 && !round4[1] ? aktualisieren : winner
//! round 4 winner = winner
//^ Wenn originTeams.length > 27 || originTeams.length === 32 => max 5 rounds
// round4.length === 2 && !round5[1] ? aktualisieren : winner
//! round 5 winner = winner

/* if (
  currentTeams.length === 8 ||
  (currentTeams.length > 13 && currentTeams.length <= 16) ||
  (currentTeams.length > 27 && currentTeams.length <= 32)
) {
  console.log("Starte Turnier!");
} else if (
  (currentTeams.length > 8 && currentTeams.length <= 13) ||
  (currentTeams.length > 16 && currentTeams.length <= 27)
) {
  console.log("Starte Vorrunde!");
}else{
  console.log("test")
}*/
