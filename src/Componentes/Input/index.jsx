import styles from './Input.module.css'

const Input = ({label, tipo_input, dataSelecionada, valor}) => {

    return ( 
        <>
            <span className={styles.label} >{label}</span>
            <input className={styles.input} onChange={dataSelecionada} type={tipo_input} value={valor} />
        </>
     );
}
 
export default Input;