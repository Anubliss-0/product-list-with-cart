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
        <nav>
          <LanguageSelect />
          <Link to={`starters`}>{t("starters.title")}</Link>
          <Link to={`mains`}>Mains</Link>
          <Link to={`deserts`}>{t("desserts.title")}</Link>
        </nav>
      </header>
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