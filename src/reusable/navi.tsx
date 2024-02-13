import styles from "./navi.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../global/themeProvider";
import { NavLink } from "react-router-dom";

export const Navi = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [active, setActive] = useState(false);

  return (
    <nav>
      <div className={styles.themeImg}>
        <img
          src={"./" + theme + "-logo.png"}
          alt=""
          onClick={() => setTheme("")}
        />
      </div>
      <div>
        <NavLink to="/" onClick={() => setActive(false)}>
          Neues Turnier
        </NavLink>
      </div>
      <div>
        <NavLink to="/addTeam" onClick={() => setActive(false)}>
          Add Team
        </NavLink>
      </div>
      <div>
        <NavLink to="/open" onClick={() => setActive(true)}>
          Offene Turniere
        </NavLink>
        <div className={styles.secondMenu}>
          {active && (
            <div>
              <NavLink to="/teamStats">Team-Statistik</NavLink>
            </div>
          )}
          {active && (
            <div>
              <NavLink to="/playerStats">Player-Statistik</NavLink>
            </div>
          )}
        </div>
      </div>
      <div>
        <NavLink to="/history" onClick={() => setActive(false)}>
          Turnier History
        </NavLink>
      </div>
    </nav>
  );
};
