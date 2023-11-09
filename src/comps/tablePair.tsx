interface Team {
    teamName: string;
    player1: string;
    player2: string;
}

interface Teams {
    teams: Team[];
}

export const TablePair: React.FC<Teams> = ({teams}) => {
    console.log("TEAMS:", teams)
    return (
        <div className="pair">
            <div className="team">{teams[0].teamName}</div><input />
            <div className="team">{teams[1].teamName}</div><input />
        </div>
    )
}