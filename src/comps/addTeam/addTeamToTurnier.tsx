export const openTurnier = (
  turnierData,
  setTurnierData,
  allTurniers,
  setAllTurniers
) => {
  // mix Teams
  const teams = turnierData.teams;
  teams.sort(() => Math.random() - 0.5);
  turnierData.rounds[0] = teams;

  if (allTurniers === null) {
    setAllTurniers([turnierData]);
  } else {
    setAllTurniers([...allTurniers, turnierData]);
  }
  setTurnierData({
    turnier: {
      turnierName: "",
      playerStats: false,
      startDate: "",
      teamsize: "",
      status: false,
      bestOf: 0,
    },
    teams: [],
    rounds: [[], [], [], [], []],
    winner: [],
  });
  localStorage.removeItem("turnierData");
  localStorage.setItem("allTurniers", JSON.stringify(allTurniers));
};
