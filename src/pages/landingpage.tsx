import { TablePair } from "../comps/tablePair"


export const Landingpage = () => {

const arr = [
    {teamName: "Team1", player1: "a", player2: "b"},
    {teamName: "Team2",  player1: "a", player2: "b"}, {teamName: "Team3", player1: "a", player2: "b" }, {teamName: "Team4", player1: "a", player2: "b" }, {teamName: "Team5", player1: "a", player2: "b" }, {teamName: "Team6", player1: "a", player2: "b" }, {teamName: "Team7", player1: "a", player2: "b" }
]
arr.sort(() => Math.random() - 0.5)

const teamPairs = [];
    for (let i = 0; i < arr.length; i += 2) {
        teamPairs.push([arr[i], arr[i + 1]]);
    }
console.log(teamPairs)
    return (
        <section>
            <h1>HIHO</h1>
            <article className="tableContainer">
                {teamPairs.map((teams, i) => <TablePair key={i} teams={teams} />)}
            </article>
        </section>
    )
}