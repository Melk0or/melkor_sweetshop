import { createLazyFileRoute } from '@tanstack/react-router'
import { useSelector } from 'react-redux'
import styles from '@/styles/Cart.module.scss'
import { getCartSelector } from '@/redux/slices/cart.slice'
import CartCard from '@/components/CartCard'


const Cart = () => {
  const cart = useSelector(getCartSelector);
  return (
    <div className={styles.root}>
      {cart.items.map((item, index) => (
        <CartCard cartCardProps={item} key={index} />
      ))}
    </div>
  )
}

export const Route = createLazyFileRoute('/cart/')({
  component: Cart
})