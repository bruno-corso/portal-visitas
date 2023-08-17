import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import styles from './Cabecalho.module.css'
import Menu from '../Menu';

const Cabecalho = () => {

    const local = useLocation().pathname

    function textoCabecalho() {
        return (
            local === '/' ? "Tela Inical" :
                local === '/consulta-historico' ? "Consulta Histórico" :
                    local === '/visitacao-hoje' ? "Visitação Hoje" :
                        local === '/agendamento' ? "Agendar..." :
                            local === '/agenda' ? "Agenda Futura" :
                                local === '/visitante' ? "Buscar Visitante Específico" :
                                    "INDEFINIDO"
        )
    }

    return (
        <>
            <div className={styles.container}>
                <p className={styles.texto}>{textoCabecalho()}</p>

            </div>
            <Outlet />
        </>
    );
}

export default Cabecalho;