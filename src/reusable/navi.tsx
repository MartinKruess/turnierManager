import styles from './navi.module.css'
import { useContext } from 'react'
import { ThemeContext } from "../global/themeProvider";
import { NavLink } from 'react-router-dom';

export const Navi = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <nav>
      <div className={styles.themeImg}>
        <img src={'./' + theme + '-logo.png'} alt="" onClick={() => setTheme('')}/>
      </div>
      <div>
        <NavLink to="/">Neues Turnier</NavLink>
      </div>
      <div>
        <NavLink to="/addTeam">Add Team</NavLink>
      </div>
      <div>
        <NavLink to="/open">Offene Turniere</NavLink>
      </div>
      <div>
        <NavLink to="/history">Turnier History</NavLink>
      </div>
      <div>
        <NavLink to="/teamStats">Team-Statistik</NavLink>
      </div>
      <div>
        <NavLink to="/playerStats">Player-Statistik</NavLink>
      </div>
    </nav>
  )
};