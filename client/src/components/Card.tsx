import { addItems, getCartSelector, removeItem } from "@/redux/slices/cart.slice";
import { IProduct } from "@/routes/index.lazy";
import styles from "@/styles/Card.module.scss";
import { Link } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ cardProps }: { cardProps: IProduct}) => {
const cart = useSelector(getCartSelector)
    const dispatch = useDispatch();
  const desc = cardProps.description;
  const previewDesc = desc.split(" ");
  previewDesc.length = 5;
  return (  
    <div className={styles.card}>
      <Link to="/catalog/">
        <div className={styles.img}>
          <img src={cardProps.imgSrc} alt="" />
        </div>
      </Link>
      <div className={styles.info}>
        <h5>{cardProps.title}</h5>
        <span className={styles.desc}>{previewDesc.join(" ")}</span>
        <div className={styles.priceBLock}>
          <p>{cardProps.price}₽</p>
          <div>
            {!cart.items.some(item => item.productName === cardProps.title) ? (
                <button onClick={() => dispatch(addItems({productName: cardProps.title, price: cardProps.price }))}>Купить</button>
            ) : (
                <>
                    <button onClick={() => dispatch(removeItem({productName: cardProps.title, price: cardProps.price }))}>-</button>
                    <span>{cart.items.find(item => item.productName === cardProps.title)?.count}</span>
                    <button onClick={() => dispatch(addItems({productName: cardProps.title, price: cardProps.price }))}>+</button>
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
