import Card from '../Card';
import styles from './Cards.module.css'

const Cards = ({ dados }) => {
    return (
        <div className={styles.areaCards}>
            {
                dados.map((item) => {
                    return(
                    <ul>
                        <li key={item.INDEX_VISITA}>
                            <Card visita={item} />
                        </li>
                    </ul>)

                })
            }
        </div>
    );
}

export default Cards;