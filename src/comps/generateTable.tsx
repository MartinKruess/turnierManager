export const GenerateTable = ({matches, updateWins}) => {
    return (
        <article className="tableContainer">
         {matches.map((teams, i) => (
        <div key={i} className="pair">
            {/* Erstes Team im Paar */}
            <div className="team">
                <p className="teamName">{teams[0].teamName}</p>
                <p>{teams[0].wins}</p>
                <input type="text" onChange={(e) => updateWins(e, i, 0)} />
            </div>

            {/* Zweites Team im Paar */}
            {teams[1] &&
            <>
            <div className="team">
                <p className="teamName">{teams[1].teamName}</p>
                <p>{teams[1].wins}</p>
                <input type="text" onChange={(e) => updateWins(e, i, 1)} />
            </div>
            </>
            }
        </div>
        ))}
    </article>
    )
}