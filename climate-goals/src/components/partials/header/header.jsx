import Logo from '../../../images/KT-Logo.png'
import styles from './header.module.scss'
import { Nav, NavItems } from '../nav/nav'


const Header = () => {
    return (
        <header className={styles.headerMain}>
            <div className="logo">
                <img src={Logo} alt="Klima-Tossen" />
            </div>
            <div className={styles.bottomRight}>
                <p>"Det er rigtigt, at vi hver især kun kan bidrage lidt til den samlede løsning."</p>
                <p>"Lige så rigtigt er det, at vi slet ikke kan nå målet, uden at hver især bidrager en smule til det."</p>
            </div>
            <Nav data={NavItems} />  
        </header>
    )
}

export { Header }