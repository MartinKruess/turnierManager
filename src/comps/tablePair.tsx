import { useContext, useState } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { Winner } from "./winner";
import { DuellModal } from "./turnierHandler/modal";
import { winHandler } from "./turnierHandler/winHandler";

interface TurnierIndexProp {
  index: number;
}

export const TurnierTable: React.FC<TurnierIndexProp> = ({ index }) => {
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

  // Data of the current Turnier
  const currentTurnier = allTurniers[index];
  const currentRounds = allTurniers[index].rounds;
  const currentData = allTurniers[index].turnier;
  const [count, setCount] = useState(0);

  // const updatePlayerPoints = (player: any) => {
  //   player.points = calcPoints(player);
  // }

  // const calcPoints = (player: any) => {
  //   const points = player.goals * 100 + player.assists * 50 + player.defs * 75;
  //   return points;
  // }

  return (
    <article className="turnierTree">
      {/* <DuellModal /> */}
      {currentRounds.map((round, i) => (
        <div
          className={
            currentRounds[0].length > 13 && currentRounds[0].length <= 16
              ? "pairContainer"
              : round.length > 1
              ? "smallPairContainer"
              : ""
          }
          key={i + 10}
        >
          {round.map((team, i) =>
            i % 2 === 0 ? (
              <div className={`top${i} top`} key={i}>
                <p className="teamName">{team.teamName}</p>
                <input
                  type="text"
                  className="win"
                  onChange={(e) =>
                    winHandler(
                      e,
                      team,
                      allTurniers,
                      currentTurnier,
                      currentRounds,
                      currentData,
                      count,
                      setCount
                    )
                  }
                />
              </div>
            ) : (
              <div className={`bot${i}`} key={i}>
                <div className={`top${i} bot`}>
                  <p className="teamName">{team.teamName}</p>
                  <input
                    type="text"
                    className="win"
                    onChange={(e) =>
                      winHandler(
                        e,
                        team,
                        allTurniers,
                        currentTurnier,
                        currentRounds,
                        currentData,
                        count,
                        setCount
                      )
                    }
                  />
                </div>
              </div>
            )
          )}
        </div>
      ))}
      {currentTurnier.winner[0] && <Winner winner={currentTurnier.winner} />}
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
