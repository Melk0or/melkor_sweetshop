import { useLoadProducts } from "@/hooks/useLoadProducts";
import { getMainItemsCardSelector } from "@/redux/slices/card.slice";
import { addItems, ICartItem, removeAllAmountOfItem, removeItem } from "@/redux/slices/cart.slice";
import { AppDispatch } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/CartCard.module.scss";

interface CartCardProps {
  cartCardProps: ICartItem;
}

const CartCard: React.FC<CartCardProps> = ({ cartCardProps }) => {
    const dispatch: AppDispatch = useDispatch();
  const mainItems = useSelector(getMainItemsCardSelector);
  const dipsatch: AppDispatch = useDispatch();
  const imgSrc = mainItems.find(
    (item) => item.title === cartCardProps.productName
  )?.imgSrc;

  if (!imgSrc) {
    useLoadProducts(mainItems, dipsatch);
  }
  console.log(imgSrc);
  return (
    <div className={styles.root}>
      <img src={imgSrc} alt="" />
      <h5>{cartCardProps.productName}</h5>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(removeItem({productName: cartCardProps.productName, price: cartCardProps.price }))}>-</button>
        <span> {cartCardProps.count}</span>
        <button onClick={() => dispatch(addItems({productName: cartCardProps.productName, price: cartCardProps.price }))}>+</button>
      </div>

      <span>{cartCardProps.price * cartCardProps.count} ₽</span>
      <button onClick={() => dispatch(removeAllAmountOfItem({productName: cartCardProps.productName, price: cartCardProps.price }))}>×</button>
    </div>
  );
};

export default CartCard;
