import { useContext } from "react"
import styles from './theme.module.css'
import { ThemeContext } from "../global/themeProvider"

export const Theme = () => {
    const { setTheme } = useContext(ThemeContext)

    return(
        <section className={styles.themeSection}>
            <div className={styles.theme} onClick={() => setTheme('rl')}>
                <img src="./rl-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('br')}>
                <img src="./br-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('fg')}>
                <img src="./fg-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('dbd')}>
                <img src="./dbd-logo.gif" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('gt')}>
                <img src="./gt-logo.png" alt="" />
            </div>
            <div className={styles.theme} onClick={() => setTheme('new')}>
                <img src="./new-logo.png" alt="" />
            </div>
        </section>
    )
}