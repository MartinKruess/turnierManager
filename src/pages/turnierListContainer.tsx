import { useEffect, useState } from "react"
import { TurnierTable } from "../comps/tablePair"
import { TurnierList } from "../comps/turnierList"
import { GroupPhase } from "../comps/groupPhase"

export const TurnierListContainer = () => {
  const [openTurnier, setOpenTurnier] = useState(false)
  const [turnierIndex, setTurnierIndex] = useState(null)

  useEffect(() => {

  },[openTurnier])

  return (
    <main>
      <h1>TurnierList</h1>
      {openTurnier && <TurnierTable turnierIndex={turnierIndex} />}
      <GroupPhase />
      {/* <TurnierList setTurnierIndex={setTurnierIndex} setOpenTurnier={setOpenTurnier} /> */}
    </main>
  )
}