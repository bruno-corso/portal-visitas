import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css'

const MenuLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={ ({ isActive }) =>
                isActive ? ` ${styles.link_ativo} ${styles.link} ` : styles.link}
        >
            {children}
        </NavLink>
    );
}

export default MenuLink;