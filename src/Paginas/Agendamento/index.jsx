import { useState } from 'react';
import Botao from '../../Componentes/Botao';
import Input from '../../Componentes/Input';
import styles from './Agendamento.module.css'

const Agendamento = ({ incluirVisita }) => {

    const [DataVisita, setDataVisita] = useState('')
    const [NomeVisitante, setNomeVisitante] = useState('')
    const [CPFVisitante, setCPFVisitante] = useState('')
    const [EmpresaVisitante, setEmpresaVisitante] = useState('')
    const [FalarCom, setFalarCom] = useState('')
    const [AssuntoVisita, setAssuntoVisita] = useState('')

    function setarDataVisita(event) {
        return setDataVisita(event.target.value);
    }

    function setarNomeVisitante(event) {
        return setNomeVisitante(event.target.value);
    }

    function setarCPFVisitante(event) {
        const cpfSujo = event.target.value
        const cpfLimpo = cpfSujo.replace(/[^0-9]/g, "")
        return setCPFVisitante(cpfLimpo);
    }

    function setarEmpresaVisitante(event) {
        return setEmpresaVisitante(event.target.value);
    }

    function setarFalarCom(event) {
        return setFalarCom(event.target.value);
    }

    function setarAssuntoVisita(event) {
        return setAssuntoVisita(event.target.value);
    }

    function enviarVisita(e) {
        e.preventDefault();
        incluirVisita(
            {
                DataVisita,
                NomeVisitante,
                CPFVisitante,
                EmpresaVisitante,
                FalarCom,
                AssuntoVisita
            }
        )
        setDataVisita('')
        setNomeVisitante('')
        setCPFVisitante('')
        setEmpresaVisitante('')
        setFalarCom('')
        setAssuntoVisita('')
    }

    return (
        <div className={styles.agendamento}>
            <form className={styles.agendamento} onSubmit={enviarVisita}>
                <Input valor={DataVisita} ValorInputado={setarDataVisita} label={"Data da Visita:"} tipo_input={"date"} />
                <Input valor={NomeVisitante} ValorInputado={setarNomeVisitante} label={"Nome do Visitante:"} tipo_input={"Text"} />
                <Input valor={CPFVisitante} ValorInputado={setarCPFVisitante} label={"CPF Visitante:"} tipo_input={"Text"} />
                <Input valor={EmpresaVisitante} ValorInputado={setarEmpresaVisitante} label={"Nome da Empresa Visitante:"} tipo_input={"Text"} />
                <Input valor={FalarCom} ValorInputado={setarFalarCom} label={"Falar com:"} tipo_input={"Text"} />
                <Input valor={AssuntoVisita} ValorInputado={setarAssuntoVisita} label={"Assunto da Visita:"} tipo_input={"Text"} />
                <Botao children={"Enviar Visita"} />
            </form>
        </div>
    )
}

export default Agendamento;
