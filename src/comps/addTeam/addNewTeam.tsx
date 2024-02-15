export const createTeam = (
  e: React.FormEvent,
  teamsize,
  turnierData,
  setTurnierData
) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;

  const newTeam = {
    teamName: formElement.teamName.value,
    wins: 0,
    teampoints: 0,
    player1: {
      playerName: formElement.playerName1.value,
      playerRank: formElement.playerRank1.value,
      goals: 0,
      assists: 0,
      defs: 0,
      points: 0,
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
      points: 0,
    },
    player3: {
      playerName: teamsize === "trio" ? formElement.playerName3.value : "",
      playerRank: teamsize === "trio" ? formElement.playerRank3.value : "",
      goals: 0,
      assists: 0,
      defs: 0,
      points: 0,
    },
  };
  turnierData.teams.length < 32 &&
    setTurnierData({
      ...turnierData,
      teams: [...turnierData.teams, newTeam],
    });
};
