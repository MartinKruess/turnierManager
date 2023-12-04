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
  const currentTurnierInfo = allTurniers[index];
  const currentTurnier = allTurniers[index].turnier;
  // const currentTeams = allTurniers[index].teams;

  let count = 2;
  console.log(currentTurnierInfo);

  useEffect(() => {}, []);

  useEffect(() => {}, [allTurniers]);

  const updateWins = (e, matches, pair, team) => {
    matches[pair][team].wins = e.target.value;
    // count <= 5 && count++;

    // Filter Teams for the next Matches
    const nextTeams = matches
      .map((pair) => {
        // WinnerTeam of pair
        const winningTeam = pair.reduce((prevTeam, currentTeam) => {
          return currentTeam.wins > prevTeam.wins ? currentTeam : prevTeam;
        });

        if (
          winningTeam &&
          currentTurnierInfo.round2.length === 2 &&
          currentTurnierInfo.round3.length === 1
        ) {
          console.log("winningTeam", winningTeam);
        }

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
        /* Warum beeinflusst das zurücksetzen der Wins, in diesem unabhängigem newArr, dass das Rendern der 2. Runde verhindert wird, dieses orientiert sich doch an den Werten der 1. Runde ? -.- */
        // newArr[i].wins = 0;
        // newArr[i + 1].wins = 0;
        teamsArr.push([newArr[i], newArr[i + 1]]);
      } else {
        // newArr[i].wins = 0;
        teamsArr.push([newArr[i]]);
      }
    }

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

    // next round
    if (
      currentTurnierInfo[`round${count}`].length ===
        currentTurnierInfo[`round${count - 1}`].length / 2 &&
      currentTurnierInfo[`round${count}`][
        currentTurnierInfo[`round${count}`].length - 1
      ][1]
    ) {
      ++count;
      console.log("--RoundCount", count);
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

  //^ Wenn originTeams.length === 8 => max 3 rounds
  // round2.length === 2 && !round3[1] ? aktualisieren : winner
  //! round 3 winner = winner
  //^ Wenn originTeams.length > 13 || originTeams.length === 16 => max 4 rounds
  // round3.length === 2 && !round4[1] ? aktualisieren : winner
  //! round 4 winner = winner
  //^ Wenn originTeams.length > 27 || originTeams.length === 32 => max 5 rounds
  // round4.length === 2 && !round5[1] ? aktualisieren : winner
  //! round 5 winner = winner

  return (
    <>
      {openDetails.status && (
        <DetailsPanel
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      )}
      {currentTurnierInfo.round3.length === 1 ||
        currentTurnierInfo.round4.length === 1 ||
        (currentTurnierInfo.round5.length === 1 && (
          <Winner winner={currentTurnierInfo.winner} />
        ))}
      {currentTurnierInfo.round5[0] &&
        currentTurnierInfo.round5.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round5}
            updateWins={updateWins}
            setOpenDetails={setOpenDetails}
          />
        )}
      {currentTurnierInfo.round4[0] &&
        currentTurnierInfo.round4.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round4}
            updateWins={updateWins}
            setOpenDetails={setOpenDetails}
          />
        )}
      {currentTurnierInfo.round3[0] &&
        currentTurnierInfo.round3.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round3}
            updateWins={updateWins}
            setOpenDetails={setOpenDetails}
          />
        )}
      {currentTurnierInfo.round2[0] &&
        currentTurnierInfo.round2.length >= 1 && (
          <GenerateTable
            matches={currentTurnierInfo.round2}
            updateWins={updateWins}
            setOpenDetails={setOpenDetails}
          />
        )}
      {currentTurnierInfo.round1[0] && (
        <GenerateTable
          matches={currentTurnierInfo.round1}
          updateWins={updateWins}
          setOpenDetails={setOpenDetails}
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
