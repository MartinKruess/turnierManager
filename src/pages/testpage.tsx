import React, { useEffect, useState } from "react";

class Team {
  constructor(public name: string) {}
}

class Match {
  constructor(public team1: Team, public team2: Team, public winner?: Team) {}
}

class Tournament {
  private teams: Team[];
  private matches: Match[];

  constructor(teams: Team[]) {
    if (![8, 16, 32].includes(teams.length)) {
      throw new Error("Die Anzahl der Teams muss 8, 16 oder 32 sein.");
    }

    this.teams = teams;
    this.matches = [];
    this.generateMatches();
  }

  private generateMatches() {
    let roundTeams = this.teams;

    while (roundTeams.length > 1) {
      const nextRoundTeams: Team[] = [];
      for (let i = 0; i < roundTeams.length; i += 2) {
        const match = new Match(roundTeams[i], roundTeams[i + 1]);
        nextRoundTeams.push(match.winner as Team);
        this.matches.push(match);
      }
      roundTeams = nextRoundTeams;
    }
  }

  public getBracket(): string[] {
    return this.matches.map((match, index) => {
      const team1Name = match.team1.name;
      const team2Name = match.team2.name;
      const winnerName = match.winner ? match.winner.name : "TBD";

      return `Runde ${index + 1}: ${team1Name} vs ${team2Name} => Sieger: ${winnerName}`;
    });
  }
}

const TournamentBracket: React.FC<{ teamCount: number }> = ({ teamCount }) => {
  const [bracket, setBracket] = useState<string[]>([]);

  useEffect(() => {
    const teams: Team[] = [];
    for (let i = 1; i <= teamCount; i++) {
      teams.push(new Team(`Team ${i}`));
    }

    const tournament = new Tournament(teams);
    setBracket(tournament.getBracket());
  }, [teamCount]);

  return (
    <div>
      <h2>Turnierbaum für {teamCount} Teams:</h2>
      <ul>
        {bracket.map((round, index) => (
          <li key={index}>{round}</li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentBracket;