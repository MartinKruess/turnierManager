export const roundHandler = (e: React.FormEvent, setRounds) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;
  setRounds(Number(formElement.value));
};
