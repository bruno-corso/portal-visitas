import Card from '../Card';
import styles from './Cards.module.css'

const Cards = ({ dados }) => {
    return (
        <div className={styles.areaCards}>
            {
                dados.map((item) => {
                    return(
                    <ul key={item.INDEX_VISITA}>
                        <li>
                            <Card visita={item} />
                        </li>
                    </ul>)

                })
            }
        </div>
    );
}

export default Cards;