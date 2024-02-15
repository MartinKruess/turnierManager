export const DuellModal = (props) => {
  return (
    <div className="modal">
      <div className="neonTextRed leftBox">
        <p>SockenRocker</p>
      </div>
      <h1 className="neonText center">VS</h1>
      <div className="neonTextBlue rightBox">
        <p>BambusBären</p>
      </div>
      <div>
        <label htmlFor="player1"></label>
        <input type="text" id="player1" />
        <label htmlFor="player2"></label>
        <input type="text" id="player2" />
      </div>
    </div>
  );
};
