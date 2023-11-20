export const GroupPhase = () => {
    const arr = [
        {
            name: "team1",
        },
        {
            name: "team2",
        },
        {
            name: "team3",
        },
        {
            name: "team4",
        },
        {
            name: "team5",
        },
        {
            name: "team6",
        },
        {
            name: "team7",
        },
        {
            name: "team8",
        },
        {
            name: "team9",
        }
    ]

    return(
        <div className="groupContainer">
            {arr.map((team) => <div>{team.name}</div>)}
        </div>
    )
}