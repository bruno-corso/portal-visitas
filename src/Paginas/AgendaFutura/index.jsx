import Card2 from '../../Componentes/Card2';
import styles from './AgendaFutura.module.css'

const AgendaFutura = ({ arrayVisitas }) => {
    return (
        <div className={styles.agendafutura}>
            {arrayVisitas.map((visita) => {
                return(
                    <ul key={visita.NomeVisitante}>
                        <li>
                            <Card2 visita={visita} />
                        </li>
                    </ul>)
            })}
            
        </div>
    );
}

export default AgendaFutura;