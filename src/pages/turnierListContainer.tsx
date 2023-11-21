import { useEffect, useState } from "react"
import { TurnierTable } from "../comps/tablePair"
import { TurnierList } from "../comps/turnierList"
import { GroupPhase } from "../comps/groupPhase"

export const TurnierListContainer = () => {
  const [openTurnier, setOpenTurnier] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {},[openTurnier])

  return (
    <main>
      <h1>TurnierList</h1>
      <div className="round5"></div>
      <div className="round4"></div>
      <div className="round3"></div>
      <div className="round2"></div>
        {openTurnier && <TurnierTable index={index} />}
      {/* <GroupPhase /> */}
      <TurnierList setIndex={setIndex} setOpenTurnier={setOpenTurnier} />
    </main>
  )
}