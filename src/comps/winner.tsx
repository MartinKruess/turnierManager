export const Winner = ({ winner }) => {
  console.log(winner);
  return (
    <article className="winnerContainer">
      <div>
        <iframe
          src="https://giphy.com/embed/LwDqTLvIBk2kI089H6"
          width="120"
          height="120"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="winnerTeam">
        <p className="winnerTeamName">Gamezone</p>
        <p>55 Punkte</p>
      </div>
      <div className="winnerDetailsContainer">
        <div className="winnerDetails">
          <p className="playerName">RaikunsGamezone </p>
          <p>17 Tore</p>
          <p>13 Assists</p>
          <p>12 Paraden</p>
        </div>
        <div className="winnerDetails">
          <p className="playerName">Keksi </p>
          <p>17 Tore</p>
          <p>13 Assists</p>
          <p>12 Paraden</p>
        </div>
        <div className="winnerDetails">
          <p className="playerName">MexikanischeSpringbohne</p>
          <p>17 Tore</p>
          <p>13 Assists</p>
          <p>12 Paraden</p>
        </div>
      </div>
    </article>
  );
};
