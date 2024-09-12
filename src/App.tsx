import { useState, useEffect } from "react";
import { Outlet, useOutletContext, useLocation } from "react-router-dom";
import { useTranslation } from "./i18n";
import DesktopCart from "./components/Cart/DesktopCart/DesktopCart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import DesktopHeader from "./components/Header/DesktopHeader/DesktopHeader";
import PhoneHeader from "./components/Header/PhoneHeader/PhoneHeader";
import PhoneCart from "./components/Cart/PhoneCart/PhoneCart";
import styles from "./App.module.scss"

type CartProps = {
  id: number;
  quantity: number;
};

type CartContextType = {
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
};

function App() {
  const { t } = useTranslation();
  const location = useLocation();
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/starters':
        document.title = `${t("starters.title")}`;
        break;
      case '/mains':
        document.title = `${t("mains.title")}`;
        break;
      case '/desserts':
        document.title = `${t("desserts.title")}`;
        break;
      default:
        document.title = 'My App';
    }
  }, [location, t]);

  return (
    <>
      < DesktopHeader />
      < PhoneHeader />
      <main className={styles.container}>
        <div className={styles.products}>
          <Outlet context={{ cart, setCart }} />
        </div>
        <div className={styles.cart}>
          <DesktopCart
            cart={cart}
            setCart={setCart}
            setShowConfirmation={setShowConfirmation}
          />
          <PhoneCart
            cart={cart}
            setCart={setCart}
            setShowConfirmation={setShowConfirmation}
          />
        </div>
      </main>
      <aside>
        <ConfirmationModal
          cart={cart}
          setCart={setCart}
          showConfirmation={showConfirmation}
          setShowConfirmation={setShowConfirmation}
        />
      </aside>
    </>
  )
}

export default App

export function useCart() {
  return useOutletContext<CartContextType>();
}