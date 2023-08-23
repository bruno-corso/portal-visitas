import { useState } from 'react';
import styles from './Card.module.css'
import { BiExpandAlt } from 'react-icons/bi'

const Card = ({ visita }) => {

    const [Detalhado, SetDetalhado] = useState(false)

    function detalharVisita() {
        SetDetalhado(!Detalhado)
        console.log("detalhou...")
    }

    return (
        <div className={styles.card}>
            <img
                style={{ width: Detalhado ? '200px' : '80px', height: Detalhado ? '200px' : '80px' }}
                src="/visitor.jpg" alt="imagem do visitante"
            />
            <span><strong>Visitante: </strong>TESTE DA SILVA JUNIOR</span>
            <span><strong>Data Visita: </strong>{visita.DATA_ENTARADA_VISITA}</span>
            <span><strong>Empresa: </strong>{visita.EMPRESA_VISTA}</span>
            <span><strong>Falar com: </strong>{visita.FALAR_COM_VISITA}</span>
            <span style={{ display: !Detalhado ? "none" : "inherit" }}><strong>Assunto: </strong>{visita.ASSUNTO_VISITA}</span>
            <span style={{ display: !Detalhado ? "none" : "inherit" }}><strong>Hora Entrada: </strong>{visita.HORA_ENTRADA_VISITA}</span>
            <span style={{ display: !Detalhado ? "none" : "inherit" }}><strong>Hora Saída: </strong>{visita.Hora_saida_visita}</span>
            <span style={{ display: !Detalhado ? "none" : "inherit" }}><strong>Doc. Visitante: </strong>XX.XXX.XXX-XX</span>
            <span
                className={styles.detalhes}
                onClick={detalharVisita}>
                {!Detalhado ? "Detalhes" : "Menos Detahes"}
                <BiExpandAlt className={styles.icon} />
            </span>
        </div>
    );
}

export default Card;