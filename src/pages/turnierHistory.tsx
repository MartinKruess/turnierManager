import { useEffect, useState } from "react";
import { TurnierHistoryList } from "../comps/turnierHistoryList";
import { TurnierHistoryData } from "../comps/turnierHistoryDate";

export const TurnierHistoryListContainer = () => {
  const [openTurnier, setOpenTurnier] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {}, [openTurnier]);

  return (
    <main>
      <h1>TurnierList</h1>
      {openTurnier && <TurnierHistoryData index={index} />}
      <TurnierHistoryList setIndex={setIndex} setOpenTurnier={setOpenTurnier} />
    </main>
  );
};
