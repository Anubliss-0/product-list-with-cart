import { useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "./i18n";
import styles from "./App.module.scss"
import Cart from "./components/Cart/Cart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

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
    <main className={styles.container}>
      <div>
        <header>
          <nav>
            <Link to={`starters`}>{t("starters.title")}</Link>
            <Link to={`mains`}>Mains</Link>
            <Link to={`deserts`}>{t("desserts.title")}</Link>
          </nav>
        </header>
        <section>
          <Outlet context={{ cart, setCart }} />
        </section>
      </div>
      <div>
        <section>
          <Cart
            cart={cart}
            setCart={setCart}
            setShowConfirmation={setShowConfirmation}
          />
        </section>
        <section>
          <ConfirmationModal
            cart={cart}
            setCart={setCart}
            showConfirmation={showConfirmation}
            setShowConfirmation={setShowConfirmation}
          />
        </section>
      </div>
    </main>
  )
}

export default App

export function useCart() {
  return useOutletContext<CartContextType>();
}