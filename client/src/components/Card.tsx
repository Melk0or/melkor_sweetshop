import { addItems, getCartSelector, removeItem } from "@/redux/slices/cart.slice";
import { IProduct } from "@/routes/index.lazy";
import styles from "@/styles/Card.module.scss";
import { Link } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ props, key }: { props: IProduct; key: number }) => {
    const cart = useSelector(getCartSelector)
    const dispatch = useDispatch();
  const desc = props.description;
  const previewDesc = desc.split(" ");
  previewDesc.length = 5;
  return (  
    <div className={styles.card}>
      <Link to="/catalog/">
        <div className={styles.img}>
          <img src={props.imgSrc} alt="" />
        </div>
      </Link>
      <div className={styles.info}>
        <h5>{props.title}</h5>
        <span className={styles.desc}>{previewDesc.join(" ")}</span>
        <div className={styles.priceBLock}>
          <p>{props.price}₽</p>
          <div>
            {!cart.items.some(item => item.productName === props.title) ? (
                <button onClick={() => dispatch(addItems({productName: props.title, price: props.price }))}>Купить</button>
            ) : (
                <>
                    <button onClick={() => dispatch(removeItem({productName: props.title, price: props.price }))}>-</button>
                    <span>{cart.items.find(item => item.productName === props.title)?.count}</span>
                    <button onClick={() => dispatch(addItems({productName: props.title, price: props.price }))}>+</button>
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
