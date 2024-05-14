import logo from "@/assets/mustache-and-top-hat-svgrepo-com (1).svg";
import cartLogo from "@/assets/cart-large-minimalistic-svgrepo-com.svg";
import styles from "@/styles/Header.module.scss";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { getCartSelector } from "@/redux/slices/cart.slice";
const Header = () => {
    const cartTotal = useSelector(getCartSelector);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo for site" />
        <h3>melkor sweetshop</h3>
      </div>
      <div className={styles.rightSide}>
      <Link to='/cart/' className={styles.cartlogo}>
          <img src={cartLogo} alt="cart"/>
          <span>{cartTotal.totalPrice} ₽</span>
      </Link>
      <Link to="/" onClick={() => localStorage.removeItem("access-token")}>
        Выход
      </Link>
      </div>
      
    </header>
  );
};

export default Header;
