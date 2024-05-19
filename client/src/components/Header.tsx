import logo from "@/assets/mustache-and-top-hat-svgrepo-com (1).svg";
import cartLogo from "@/assets/cart-large-minimalistic-svgrepo-com.svg";
import styles from "@/styles/Header.module.scss";
import { Link, useLocation } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCartSelector, setCartState } from "@/redux/slices/cart.slice";
import { useEffect } from "react";
const Header = () => {
  const cart = useSelector(getCartSelector);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location.pathname);
  const isEntryPage: boolean = location.pathname === "/" || location.pathname === '/sign-in' || location.pathname === '/sign-up';
  useEffect(() => {
    dispatch(setCartState());
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo for site" />
        <h3>melkor sweetshop</h3>
      </div>
      {!isEntryPage && (
        <div className={styles.rightSide}>
          <Link to="/cart/" className={styles.cartlogo}>
            <img src={cartLogo} alt="cart" />
            <span>
              {cart.totalPrice} <span>₽</span>
            </span>
          </Link>
          <Link to="/" onClick={() => localStorage.removeItem("access-token")}>
            Exit
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
