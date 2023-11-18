import { useContext } from "react"
import styles from './theme.module.css'
import { ThemeContext } from "../global/themeProvider"

export const Theme = () => {
    const { setTheme } = useContext(ThemeContext)

    return(
        <section className={styles.themeSection}>
            <div className={styles.theme} onClick={() => setTheme('rl')} id={styles.box1}>
                <img src="./rl-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('br')} id={styles.box2}>
                <img src="./br-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('csgo')} id={styles.box3}>
                <img src="./csgo-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('dbd')} id={styles.box4}>
                <img src="./dbd-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('lol')} id={styles.box5}>
                <img src="./lol-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('new')} id={styles.box6}>
                <img src="./new-logo.png" alt="" />
            </div>
        </section>
    )
}