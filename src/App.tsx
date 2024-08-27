import { useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "./i18n";
import styles from "./App.module.scss"
import Cart from "./components/Cart/Cart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import LanguageSelect from "./components/LangugeSelect/LangugeSelect";

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
      <header>
      </header>
      <main className={styles.container}>
        <div className={styles.products}>
        <nav>
          <LanguageSelect />
          <Link to={`starters`}>{t("starters.title")}</Link>
          <Link to={`mains`}>Mains</Link>
          <Link to={`deserts`}>{t("desserts.title")}</Link>
        </nav>
          <section>
            <Outlet context={{ cart, setCart }} />
          </section>
        </div>
        <div className={styles.cart}>
          <Cart
            cart={cart}
            setCart={setCart}
            setShowConfirmation={setShowConfirmation}
          />
        </div>
        <ConfirmationModal
          cart={cart}
          setCart={setCart}
          showConfirmation={showConfirmation}
          setShowConfirmation={setShowConfirmation}
        />
      </main>
    </>
  )
}

export default App

export function useCart() {
  return useOutletContext<CartContextType>();
}