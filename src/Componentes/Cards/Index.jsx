import Card2 from '../Card2';
import styles from './Cards.module.css'

const Cards = ({ dados }) => {
    return (
        <div className={styles.areaCards}>
            {
                dados.map((item) => {
                    return(
                    <ul key={item.INDEX_VISITA}>
                        <li>
                            <Card2 visita={item} />
                        </li>
                    </ul>)

                })
            }
        </div>
    );
}

export default Cards;