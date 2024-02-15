export const winHandler = (
  e,
  team,
  allTurniers,
  currentTurnier,
  currentRounds,
  currentData,
  count,
  setCount
) => {
  team.wins = e.target.value;
  team.allWins = Number(team.allWins) + Number(e.target.value);

  // Auswertung der Wins/Runde
  if (
    // Runden[1][letzter Eintrag].wins > bestOf/2 || Runden[1][vorletzter Eintrag].wins > bestOf/2
    // Dadurch wird bei beiden teams geprüft ob sie mehr als die Hälfte der Spiele gewonnen haben
    currentRounds[count][currentRounds[count].length - 1].wins >
      currentData.bestOf / 2 ||
    currentRounds[count][currentRounds[count].length - 2].wins >
      currentData.bestOf / 2
  ) {
    // Wenn ja, dann wird das nächste Team in die nächste Runde gepusht
    if (currentRounds[count].length > 2) {
      currentRounds[count + 1] = currentRounds[count].filter((team) => {
        if (team.wins > currentData.bestOf / 2) {
          team.wins = 0;
          return team;
        }
      });
    } else {
      // Wenn es das Finale ist, dann wird der Gewinner in das currentTurnier.winner Array gepusht
      currentTurnier.winner = currentRounds[count].filter((team) => {
        if (team.wins > currentData.bestOf / 2) {
          team.wins = 0;
          return team;
        }
      });
    }
    // Maximal 5 Runden
    count < 5 && setCount(count + 1);
    localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
  }
};
