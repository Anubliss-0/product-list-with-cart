import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useTranslation } from "./i18n";
import styles from "./App.module.scss"
import Cart from "./components/Cart/Cart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import Header from "./components/Header/Header";

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
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  return (
    <>
      < Header />
      <main className={styles.container}>
        <div className={styles.products}>
          <Outlet context={{ cart, setCart }} />
        </div>
        <div className={styles.cart}>
          <Cart
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