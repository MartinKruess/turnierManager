import { useContext } from "react";
import { TurnierContext } from "../../global/turnierProvider";

export const TeamPreview = () => {
  const { turnierData } = useContext(TurnierContext);
  return (
    <div className="teamPreview">
      {turnierData.teams.map((team, i) => (
        <>
          {i === 7 || i === 15 || i === 23 ? (
            <>
              <p key={i}>{team.teamName}</p>
              <div className="spacer"></div>
            </>
          ) : (
            <p key={i}>{team.teamName}</p>
          )}
        </>
      ))}
    </div>
  );
};
