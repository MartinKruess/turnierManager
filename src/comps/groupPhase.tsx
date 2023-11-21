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

    /*
        2:0 Sieg: 2 Punkte
        2:1 Sieg: 1 Punkt
        Niederlage: 0 Punkte

        Bei gleicher Punktzahl:
        in den Siegerspielen ... falls möglich...  Geschossene Tore - erhaltene Tore Vergleich

        oder

        Punktegleichheit = Rückrunde Händisch!
    */

    return(
        <div className="groupContainer">
            {arr.map((team) => <div>{team.name}</div>)}
            {}
        </div>
    )
}