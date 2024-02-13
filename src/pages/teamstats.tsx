import { useContext } from "react";
import { AllTurniersContext } from "../global/turnierProvider";

export const Teamstats = ({ index }) => {
  const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

  const currentTurnier = allTurniers[index];

  return (
    <article>
      {currentTurnier.teams.map((team) => (
        <div>{team.teamName}</div>
      ))}
    </article>
  );
};
