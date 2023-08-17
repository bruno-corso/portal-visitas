import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header className={styles.menu}>
            <nav className={styles.navegacao}>
                <img className={styles.logo} src='/imagem_Tum.png'/>
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