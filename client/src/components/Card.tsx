import { IProduct } from "@/routes/index.lazy";
import styles from "@/styles/Card.module.scss"

const Card = ({props, key}: {props: IProduct, key: number}) => {
    return <div className={styles.card}>
        <img src={props.imgSrc} alt="" />
        <h5>{props.title}</h5>
        <p>{props.price}</p>
    </div>
}

export default Card;