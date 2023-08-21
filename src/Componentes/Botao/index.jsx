import styles from './Botao.module.css'

const Botao = ({children, action}) => {
    return ( 
        <button onClick={action} className={styles.botao}>{children}</button>
     );
}
 
export default Botao;