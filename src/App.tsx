import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import styles from "./App.module.scss"
import DesktopCart from "./components/Cart/DesktopCart/DesktopCart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import DesktopHeader from "./components/Header/DesktopHeader/DesktopHeader";
import PhoneHeader from "./components/Header/PhoneHeader/PhoneHeader";
import PhoneCart from "./components/Cart/PhoneCart/PhoneCart";

type CartProps = {
  id: number;
  quantity: number;
};

type CartContextType = {
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
};

function App() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

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