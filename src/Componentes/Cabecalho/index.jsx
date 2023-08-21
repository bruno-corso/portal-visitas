import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import styles from './Cabecalho.module.css'


const Cabecalho = () => {

    const local = useLocation().pathname

    function textoCabecalho() {
        return (
            local === '/' ? "Selcione acima o que deseja fazer..." :
                local === '/consulta-historico' ? "Consultar Histórico de Visitas" :
                    local === '/visitacao-hoje' ? "Visitantes Hoje" :
                        local === '/agendamento' ? "Agendar uma Nova Vista" :
                            local === '/agenda' ? "Visualizar Agendamentos" :
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