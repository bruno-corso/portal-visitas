import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate()

    return (
        <header className={styles.menu}>
            <nav className={styles.navegacao}>
                <img onClick={() => navigate('/')} className={styles.logo} src='/imagem_Tum_white.png'/>
                <MenuLink to='/consulta-historico'>
                    Consultar Histórico
                </MenuLink>
                <MenuLink to='/visitacao-hoje'>
                    Vistas Hoje
                </MenuLink>
                <MenuLink to='/agendamento'>
                    Agendamento
                </MenuLink>
                <MenuLink to='/agenda'>
                    Agenda Futura
                </MenuLink>
                <MenuLink to='/visitante'>
                    Buscar Visitante
                </MenuLink>
            </nav>
        </header>
    );
}

export default Menu;