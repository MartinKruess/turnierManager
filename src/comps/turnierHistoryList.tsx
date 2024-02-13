import { useContext, useEffect } from "react";
import { AllTurniersContext } from "../global/turnierProvider";
import { AllTurniersType, TurnierDataType } from "../global/types";

export const TurnierHistoryList = ({ setIndex, setOpenTurnier }) => {
  const { allTurniers, setAllTurniers }: AllTurniersType =
    useContext(AllTurniersContext);

  useEffect(() => {}, [allTurniers]);

  const showTurnier = (i: number) => {
    setOpenTurnier(true);
    setIndex(i);
  };

  const closeTurnier = () => {
    setOpenTurnier(false);
  };

  return (
    <section className="turnierListContainer">
      <article className="topRow">
        <div>Turniername</div>
        <div>Teams</div>
        <div>Teamgröße</div>
        <div>Best of</div>
        <div>Stattgefunden am</div>
        <div>Vorschau</div>
      </article>
      {allTurniers && allTurniers.find((turnier) => !turnier.turnier.status) ? (
        allTurniers.map((turnier: TurnierDataType, i: number) => {
          return (
            !turnier.turnier.status && (
              <article key={i} className="row">
                <div>{turnier.turnier.turnierName}</div>
                <div>{turnier.teams.length}</div>
                <div>{turnier.turnier.teamsize}</div>
                <div title="vor Viertelfinale / ab Viertelfinale">
                  {turnier.turnier.bestOf}/{turnier.turnier.bestOf + 2}
                </div>
                <div>{String(turnier.turnier.startDate)}</div>
                <button className="startBTN" onClick={() => showTurnier(i)}>
                  Details
                </button>
              </article>
            )
          );
        })
      ) : (
        <p>
          Es gibt aktuell keine offenen Turnier. Bitte lege zuerst ein Turnier
          an.
        </p>
      )}
    </section>
  );
};
