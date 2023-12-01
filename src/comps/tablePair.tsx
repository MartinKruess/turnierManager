import { useContext, useEffect, useState } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { AllTurniersType, TeamType } from "../global/types";
import { GenerateTable } from "./generateTable";
import { Winner } from "./winner";

interface TurnierIndexProp {
  index: number;
}

export const TurnierTable: React.FC<TurnierIndexProp> = ({ index }) => {
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

  // Data of the current Turnier
  const turnierIndex = index;
  const currentTurnierInfo = allTurniers[index];
  const currentTurnier = allTurniers[index].turnier;
  const currentTeams = allTurniers[index].teams;

  let count = 2;
  console.log(currentTurnierInfo);

  useEffect(() => {}, []);

  useEffect(() => {}, [allTurniers]);

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

    let t = 2;
    const teamsArr = [];
    const newArr = [...nextTeams];
    newArr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < newArr.length; i += t) {
      if (newArr[i + 1]) {
        /* Warum beeinflusst das zurücksetzen der Wins, in diesem unabhängigem newArr, dass das Rendern der 2. Runde verhindert wird, diese orientiert sich doch an den Werten der 1. Runde ? -.- */
        // newArr[i].wins = 0;
        // newArr[i + 1].wins = 0;
        teamsArr.push([newArr[i], newArr[i + 1]]);
      } else {
        // newArr[i].wins = 0;
        teamsArr.push([newArr[i]]);
      }
    }

    // URSPRUNG:
    // setAllTurniers([...allTurniers, currentTurnierInfo.round2 = [...teamsArr]])

    // FUNKTIONIERT, UPDATED ABER ALLE TURNIER RUNDE X
    // setAllTurniers((allTurniers) =>
    //   allTurniers.map((turnier) => ({
    //     ...turnier,
    //     [`round${count}`]: teamsArr,
    //   }))
    // );

    // NICE!!!
    setAllTurniers((prevTurniers) =>
      prevTurniers.map((turnier, index) =>
        index === turnierIndex
          ? { ...turnier, [`round${count}`]: [...teamsArr] }
          : turnier
      )
    );
    //currentTurnierInfo.round2 = teamsArr;
    // currentTurnierInfo.round2[0][0].wins = 0;
    localStorage.setItem("allTurniers", JSON.stringify(allTurniers));

    // leider klappt das updaten der Round nicht ganz...
    if (
      currentTurnierInfo[`round${count + 1}`] ===
        currentTurnierInfo[`round${count + 1}`].length / 2 &&
      currentTurnierInfo[`round${count + 1}`][-1][1]
    ) {
      count++;
    }
  };
  let winner = "";
  console.log(
    "Round2",
    currentTurnierInfo.round2[0] && currentTurnierInfo.round2.length >= 1
  );
  console.log(
    "Round3",
    currentTurnierInfo.round3 && currentTurnierInfo.round3.length >= 1
  );
  console.log(
    "Round4",
    currentTurnierInfo.round4 && currentTurnierInfo.round4.length >= 1
  );
  console.log(
    "Round5",
    currentTurnierInfo.round5 && currentTurnierInfo.round5.length >= 1
  );
  console.log("----------------");

  return (
    <>
      {currentTurnierInfo.round3.length === 1 ||
        currentTurnierInfo.round4.length === 1 ||
        (currentTurnierInfo.round5.length === 1 && <Winner winner={winner} />)}
      {currentTurnierInfo.round5[0] &&
        currentTurnierInfo.round5.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round5}
            updateWins={updateWins}
          />
        )}
      {currentTurnierInfo.round4[0] &&
        currentTurnierInfo.round4.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round4}
            updateWins={updateWins}
          />
        )}
      {currentTurnierInfo.round3[0] &&
        currentTurnierInfo.round3.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round3}
            updateWins={updateWins}
          />
        )}
      {currentTurnierInfo.round2[0] &&
        currentTurnierInfo.round2.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round2}
            updateWins={updateWins}
          />
        )}
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
