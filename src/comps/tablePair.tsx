import { useContext } from "react";
import { TeamsContext } from "../global/teamProvider";

interface Team {
    teamName: string;
    player1: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
    player2: { playerName: string, playerRank: string, goals: number, assists: number, defs: number};
}

interface Teams {
    teams: Team[],
}

export const TablePair: React.FC<Teams> = () => {
    const {teams, setTeams} = useContext(TeamsContext)
    console.log("TEAMS:", teams)
    return (
        <div className="pair">
            <div className="team">{teams[0].teamName}</div><input />
            {teams[1] && (
                <>
                    <div className="team">{teams[1].teamName}</div><input />
                </>
            )}
        </div>
    )
}