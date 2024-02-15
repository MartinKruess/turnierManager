import { useContext } from "react";
import { AllTurniersContext } from "../../global/turnierProvider";

export const TurnierHistoryData = ({ index }) => {
  const { allTurniers } = useContext(AllTurniersContext);
  const currentTurnier = allTurniers[index];
  console.log("history", currentTurnier);

  return (
    <article className="historyTable">
      <div className="teamRow">
        <p className="historyText">Team</p>
        <p className="historyNumber">Wins</p>
        <p className="historyNumber">Punkte</p>
        <br />
        <p className="historyText">Player1</p>
        <p className="historyNumber">Tore</p>
        <p className="historyNumber">Vorlagen</p>
        <p className="historyNumber">Paraden</p>
        <p className="historyNumber">Punkte</p>
        {currentTurnier.turnier.teamsize === "duo" && (
          <>
            <p className="historyText">Player2</p>
            <p className="historyNumber">Tore</p>
            <p className="historyNumber">Vorlagen</p>
            <p className="historyNumber">Paraden</p>
            <p className="historyNumber">Punkte</p>
          </>
        )}
        {currentTurnier.turnier.teamsize !== "trio" && (
          <>
            <p className="historyText">Player3</p>
            <p className="historyNumber">Tore</p>
            <p className="historyNumber">Vorlagen</p>
            <p className="historyNumber">Paraden</p>
            <p className="historyNumber">Punkte</p>
          </>
        )}
      </div>
      {currentTurnier.teams.map((team, i) => (
        <div className="teamRow" key={i}>
          <p className="historyText">{team.teamName}</p>
          <p className="historyNumber">{team.teampoints}</p>
          <p className="historyNumber">
            {team.teampoints +
              team.player1.goals +
              team.player2.goals +
              team.player3.goals +
              team.player1.assists * 0.5 +
              team.player2.assists * 0.5 +
              team.player3.assists * 0.5 +
              team.player1.defs * 0.75 +
              team.player2.defs * 0.75 +
              team.player3.defs * 0.75}
          </p>
          {/* Player 1 */}
          <p className="historyText">{team.player1.playerName}</p>
          <p className="historyNumber">{team.player1.goals}</p>
          <p className="historyNumber">{team.player1.assists}</p>
          <p className="historyNumber">{team.player1.defs}</p>
          <p className="historyNumber">{team.player1.points}</p>
          {team.player2.playerName && (
            <>
              <p className="historyText">{team.player2.playerName}</p>
              <p className="historyNumber">{team.player2.goals}</p>
              <p className="historyNumber">{team.player2.assists}</p>
              <p className="historyNumber">{team.player2.defs}</p>
            </>
          )}
          {team.player3.playerName && (
            <>
              <p className="historyText">{team.player3.playerName}</p>
              <p className="historyNumber">{team.player3.goals}</p>
              <p className="historyNumber">{team.player3.assists}</p>
              <p className="historyNumber">{team.player3.defs}</p>
            </>
          )}
        </div>
      ))}
    </article>
  );
};
