import { useState } from 'react';
import styles from './Card2.module.css'

const Card2 = ({ visita }) => {


    return (
        <div className={styles.card}>
            
            <span><strong>Visitante: </strong>{visita.NomeVisitante}</span>
            <span><strong>Data Visita: </strong>{visita.DataVisita}</span>
            <span><strong>Empresa: </strong>{visita.EmpresaVisitante}</span>
            <span><strong>Falar com: </strong>{visita.FalarCom}</span>
            
        </div>
    );
}

export default Card2;