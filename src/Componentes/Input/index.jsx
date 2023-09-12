import styles from './Input.module.css'

const Input = ({label, tipo_input, ValorInputado, valor}) => {

    return ( 
        <>
            <span className={styles.label} >{label}</span>
            <input className={styles.input} onChange={ValorInputado} type={tipo_input} value={valor} />
        </>
     );
}
 
export default Input;