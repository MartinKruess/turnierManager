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

    // const currentTeams = [...teams]
// currentTeams.sort(() => Math.random() - 0.5)

// const teamPairs = [];
// let t = 2
// const createPairs = () => {
//     for (let i = 0; i < arr.length; i += t) {
//         if( arr[i + 1]){
//             teamPairs.push([arr[i], arr[i + 1]]);
//         }else{
//             teamPairs.push([arr[i]]);
//             t = t*2
//         }
//     }
// }

// console.log(teamPairs)
//onSubmit={() => turnierData}

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