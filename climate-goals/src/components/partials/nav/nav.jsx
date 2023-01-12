import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss'

const NavItem = [
    {navtitle: 'START', path: "/" },
    {navtitle: 'DIT CO2', path: "/co2" },
    {navtitle: 'CLEAN UP', path: "/cleanup" },
    {navtitle: 'TILMELD DIG', path: "/tilmeld" }
];

const Nav = props => {
    return (
        <nav className={styles.navMain}>
            <ul>
                {props.data.map((NavItem, key) => {
                    return(
                        <li key={key}><NavLink to={NavItem.path}>{NavItem.navtitle}</NavLink></li>
                    )
                })}
            </ul>
        </nav>
    )
}
export { Nav, NavItem }