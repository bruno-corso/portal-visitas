import { useState } from 'react';
import Input from '../../Componentes/Input';
import styles from './Historico.module.css'
import { parse } from 'date-fns'; // Importa a função de formatação da biblioteca
import Botao from '../../Componentes/Botao';
import Cards from '../../Componentes/Cards/Index';

const ConsultarHistorico = ({ dados_visitas }) => {

    const [Data_in, SetData_in] = useState('');
    const [Data_out, SetData_out] = useState('');
    const [VisitasSelecionadas, SetVisitasSelecionadas] = useState([]);

    function setarIn(event) {
        return SetData_in(event.target.value);
    }

    function setarOut(event) {
        return SetData_out(event.target.value);
    }

    function dadosFiltrados() {
        const date_in_format = parse(Data_in, 'yyyy-MM-dd', new Date());
        const date_out_format = parse(Data_out, 'yyyy-MM-dd', new Date());

        if (Data_in === '' || Data_out === '') {
            return (
                alert("Favor inserir Data Inicio e Data Fim")
            )
        }
        else {
            const visitas_filtradas = dados_visitas.filter(item => {
                return parse(item.DATA_ENTARADA_VISITA, 'dd/MM/yyyy', new Date()) >= date_in_format && parse(item.DATA_ENTARADA_VISITA, 'dd/MM/yyyy', new Date()) <= date_out_format
            })
            console.log('Data_in: ' + date_in_format.toLocaleString())
            console.log('Data_out: ' + date_out_format.toLocaleString())
            SetVisitasSelecionadas(visitas_filtradas)
            console.log(VisitasSelecionadas)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div>
                    <Input label={'Data Inicio: '} dataSelecionada={setarIn} tipo_input={'date'} valor={Data_in} />
                </div>
                <div>
                    <Input label={'Data Final: '} dataSelecionada={setarOut} tipo_input={'date'} valor={Data_out} />
                </div>
                <Botao action={dadosFiltrados}>Buscar</Botao>
            </div>
            <Cards dados={VisitasSelecionadas}/>
        </>

    );
}

export default ConsultarHistorico;