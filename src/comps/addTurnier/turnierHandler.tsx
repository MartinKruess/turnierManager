import { TurnierType } from "../../global/types";

export const submitHandler = (
  e: React.FormEvent,
  rounds,
  turnierData,
  setTurnierData
) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;
  const dateRaw = formElement.startDate.value;
  const dateArr = dateRaw.split("-").reverse();
  const date = dateArr.join(".");

  const turnier: TurnierType = {
    turnierName: formElement.turnierName.value,
    startDate: date,
    teamsize: formElement.teamsize.value,
    playerStats: formElement.playerStats.checked,
    bestOf: rounds,
    status: true,
  };
  if (!turnierData[0]) {
    console.log(turnierData);
    setTurnierData({ ...turnierData, turnier: turnier });
  }
};
