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
        <p className="winnerTeamName">{winner[0].teamName}</p>
        <p>55 Punkte</p>
      </div>
      <div className="winnerDetailsContainer">
        <div className="winnerDetails">
          <p className="playerName">{winner[0].player1.playerName}</p>
          {winner[0].player1.goals ? (
            <>
              <p>{winner[0].player1.goals} Tore</p>
              <p>{winner[0].player1.assists} Assists</p>
              <p>{winner[0].player1.defs} Paraden</p>
            </>
          ) : (
            <p>{winner[0].player1.playerRank}</p>
          )}
        </div>
        {winner[0].player2.playerName && (
          <div className="winnerDetails">
            <p className="playerName">{winner[0].player2.playerName}</p>
            {winner[0].player2.goals ? (
              <>
                <p>{winner[0].player2.goals} Tore</p>
                <p>{winner[0].player2.assists} Assists</p>
                <p>{winner[0].player2.defs} Paraden</p>
              </>
            ) : (
              <p>{winner[0].player2.playerRank}</p>
            )}
          </div>
        )}
        {winner[0].player3.playerName && (
          <div className="winnerDetails">
            <p className="playerName">{winner[0].player3.playerName}</p>
            {winner[0].player3.goals ? (
              <>
                <p>{winner[0].player3.goals} Tore</p>
                <p>{winner[0].player3.assists} Assists</p>
                <p>{winner[0].player3.defs} Paraden</p>
              </>
            ) : (
              <p>{winner[0].player3.playerRank}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
