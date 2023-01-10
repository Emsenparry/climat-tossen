import styles from './nav.module.scss'

const NavItems = [
    'START',
    'DIT CO2',
    'CLEAN UP',
    'TILMELD DIG'
];

const Nav = props => {
    return (
        <nav className={styles.navMain}>
            <ul>
                {props.data.map((NavItems, key) => {
                    return(
                        <li key={key}>{NavItems}</li>
                    )
                })}
            </ul>
        </nav>
    )
}
export { Nav, NavItems }