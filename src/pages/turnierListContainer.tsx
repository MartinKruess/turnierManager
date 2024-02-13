import { useEffect, useState } from "react";
import { TurnierTable } from "../comps/tablePair";
import { TurnierList } from "../comps/turnierList";
import { GroupPhase } from "../comps/groupPhase";

export const TurnierListContainer = () => {
  const [openTurnier, setOpenTurnier] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {}, [openTurnier]);

  return (
    <main>
      <h1>TurnierList</h1>
      {openTurnier && <TurnierTable index={index} />}
      {/* <GroupPhase /> */}
      <TurnierList setIndex={setIndex} setOpenTurnier={setOpenTurnier} />
    </main>
  );
};
