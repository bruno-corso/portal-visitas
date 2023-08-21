import styles from './Card.module.css'

const Card = ({visita}) => {
    return ( 
        <div className={styles.card}>
            <img src="/visitor.jpg" alt="imagem do visitante" />
            <span><strong>Data Visita: </strong>{visita.DATA_ENTARADA_VISITA}</span>
            <span><strong>Empresa: </strong>{visita.EMPRESA_VISTA}</span>
            <span><strong>Falar com: </strong>{visita.FALAR_COM_VISITA}</span>
        </div>
     );
}
 
export default Card;