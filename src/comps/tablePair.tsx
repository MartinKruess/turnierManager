import { useContext, useEffect, useState } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { AllTurniersType } from "../global/types";

export const TurnierTable: React.FC<AllTurniersType> = () => {
    const {allTurniers, setAllTurniers} = useContext(AllTurniersContext)
    const [teamPairs, setTeamPairs] = useState([])
    const i = 0
    const teams = allTurniers[i].teams
    
    useEffect(() => {
        // createPairs()
    }, [])

    useEffect(() => {console.log(teamPairs);}, [teamPairs])

    if(teams.length === 8 || teams.length === 16 || teams.length === 32){
        console.log("Lade Turnierbaum!")
    }else if(teams.length > 8 && teams.length < 14){
        console.log("Vorrunde für top 8!")
    }else if(teams.length > 16 && teams.length < 26){
        console.log("Vorrunde für top 16!")
    }

    // const teamsArr = [];
    // let t = 2
    // const createPairs = () => {
    //     if(allTurniers[i]) {
    //         const currentTeams = allTurniers[i].teams
    //         currentTeams.sort(() => Math.random() - 0.5)
    //         for (let i = 0; i < currentTeams.length; i += t) {
    //             if( currentTeams[i + 1]){
    //                 teamsArr.push([currentTeams[i], currentTeams[i + 1]]);
    //             }else{
    //                 teamsArr.push([currentTeams[i]]);
    //                 t = t*2
    //             }
    //         }
    //         setTeamPairs(teamsArr)
    //     }
        
    // }

    return (<>
       
    </>
    );

    // {teamPairs[allTurniers[0].teams.length] && <article className="tableContainer">
    //      {teamPairs.map((teams, i) => (
    //     <div key={i} className="pair">
    //         {/* Erstes Team im Paar */}
    //         <div>Team 1: {teams[0].teamName}</div>
    //         <div>Player 1: {teams[0].player1.playerName}</div>
    //         <div>Player 2: {teams[0].player2.playerName}</div>
    //         <div>Player 3: {teams[0].player3.playerName}</div>

    //         {/* Zweites Team im Paar */}
    //         <div>Team 2: {teams[1].teamName}</div>
    //         <div>Player 1: {teams[1].player1.playerName}</div>
    //         <div>Player 2: {teams[1].player2.playerName}</div>
    //         <div>Player 3: {teams[1].player3.playerName}</div>
    //     </div>
    //     ))}
    // </article>}
}


// -------------------------------- Versuch 2 --------------------------------


// interface Team {
//   teamName: string;
//   points: number;
// }

// interface Turnier {
//   teams: Team[];
// }

// export const Turnierbaum: React.FC = () => {
//   const { allTurniers, setAllTurniers } = useContext(AllTurniersContext);

//   // Funktion zum Aktualisieren der Punkte eines Teams
//   const updatePoints = (turnierIndex: number, teamIndex: number, points: number) => {
//     setAllTurniers((prevTurniers) => any[] {
//       const newTurniers = [...prevTurniers]
//       newTurniers[turnierIndex].teams[teamIndex].wins = points
//       return newTurniers
//     });
//   };

//   // Funktion zum Fortfahren zum nächsten Schritt (z.B. nächste Runde) nach Eingabe der Punkte
//   const advanceToNextRound = (turnierIndex: number) => {
//     // Hier kannst du die Logik implementieren, um Teams in die nächste Runde zu bewegen
//     // Zum Beispiel könntest du Sortierung und Vergleiche verwenden, um die nächsten Paarungen zu bestimmen.
//     // Beachte, dass dies von der Struktur deines Turnierbaums abhängt.

//     // Beispiel: Sortiere Teams nach Punkten in absteigender Reihenfolge
//     const sortedTeams = allTurniers[turnierIndex].teams.sort((a, b) => b.points - a.points);

//     // Beispiel: Paare Teams für die nächste Runde (Annahme: immer doppelt eliminatorisch)
//     const nextRoundTeams: Team[] = [];
//     for (let i = 0; i < sortedTeams.length; i += 2) {
//       const team1 = sortedTeams[i];
//       const team2 = sortedTeams[i + 1];
//       const winningTeam = a + b
//       nextRoundTeams.push(winningTeam);
//     }

//     // Beispiel: Erstelle neues Turnierobjekt für die nächste Runde
//     const nextRoundTurnier: Turnier = {
//       teams: nextRoundTeams,
//     };

//     // Beispiel: Ersetze das aktuelle Turnier mit dem neuen Turnier für die nächste Runde
//     const newTurniers = [...allTurniers];
//     newTurniers[turnierIndex] = nextRoundTurnier;
//     setAllTurniers(newTurniers);
//   };

//   return (
//     <div>
//       {allTurniers.map((turnier, turnierIndex) => (
//         <div key={turnierIndex}>
//           <h2>Turnier {turnierIndex + 1}</h2>
//           {turnier.teams.map((team, teamIndex) => (
//             <div key={teamIndex}>
//               <p>{`Team: ${team.teamName}, Punkte: ${team.wins}`}</p>
//               <input
//                 type="number"
//                 value={team.wins || ''}
//                 onChange={(e) => updatePoints(turnierIndex, teamIndex, parseInt(e.target.value, 10))}
//               />
//             </div>
//           ))}
//           <button onClick={() => advanceToNextRound(turnierIndex)}>Nächste Runde</button>
//         </div>
//       ))}
//     </div>
//   );
// };