// export const DetailsPanel = ({ teams }) => {
//   const match = `${teams[0].teamName} VS ${teams[1].teamName}`;
//   return (
//     <div className="detailsPanel">
//       <h2>{match}</h2>
//     </div>
//   );
// };

export const DetailsPanel = ({ openDetails, setOpenDetails }) => {
  const pair = openDetails.pair;
  console.log("PAIR", pair);
  const match = `${pair[0].teamName} VS ${pair[1].teamName}`;

  const changeHandler = (e) => {
    pair[0].player1.golas += e.target.goalsP1.value;
    pair[0].player1.assists += e.target.assistsP1.value;
    pair[0].player1.defs += e.target.defsP1.value;
    pair[0].player2.golas += e.target.goalsP2.value;
    pair[0].player2.assists += e.target.assistsP2.value;
    pair[0].player2.defs += e.target.defsP2.value;

    // pair[1].player1.golas += e.target.p1Goals.value;
    // pair[1].player1.assists += e.target.p1Goals.value;
    // pair[1].player1.defs += e.target.p1Goals.value;
    // pair[1].player2.golas += e.target.p1Goals.value;
    // pair[1].player2.assists += e.target.p1Goals.value;
    // pair[1].player2.defs += e.target.p1Goals.value;
  };

  return (
    <div className="detailsPanel">
      <h2>{match}</h2>
      {pair.map((team) => (
        <form
          className="teamsPanel"
          key={team.teamName}
          onChange={(e) => changeHandler(e)}
        >
          {/* PLAYER 1 */}
          <label>{team.player1.playerName}</label>
          <label>{team.player1.playerRank}</label>
          <div>
            <label>
              <span className="statTitle">Tore</span>
              <label>{team.player1.goals}</label>
              <input type="text" name="goals" />
            </label>
          </div>
          <label htmlFor="">
            <span className="statTitle">Vorlagen</span>
            <label htmlFor="">{team.player1.assists}</label>
            <input type="text" name="assists" />
          </label>
          <label htmlFor="">
            <span className="statTitle">Paraden</span>
            <label htmlFor="">{team.player1.defs}</label>
            <input type="text" name="defs" />
          </label>

          {/* PLAYER 2 */}
          <label>{team.player2.playerName}</label>
          <label>{team.player2.playerRank}</label>
          <div>
            <label>
              <span className="statTitle">Tore</span>
              <label>{team.player2.goals}</label>
              <input type="text" />
            </label>
          </div>
          <label htmlFor="">
            <span className="statTitle">Vorlagen</span>
            <label htmlFor="">{team.player2.assists}</label>
            <input type="text" />
          </label>
          <label htmlFor="">
            <span className="statTitle">Paraden</span>
            <label htmlFor="">{team.player2.defs}</label>
            <input type="text" />
          </label>
        </form>
      ))}
    </div>
  );
};
