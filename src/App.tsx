import { useState } from "react";
import { Outlet, Link, useOutletContext } from "react-router-dom";
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
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  return (
    <>
      <header>
        <h1>Order some fud</h1>
        <nav>
          <Link to={`starters`}>Starters</Link>
          <Link to={`mains`}>Mains</Link>
          <Link to={`deserts`}>Deserts</Link>
        </nav>
      </header>
      <Outlet context={{ cart, setCart }} />
      <Cart
        cart={cart}
        setCart={setCart}
        setShowConfirmation={setShowConfirmation}
      />
      <ConfirmationModal
        cart={cart}
        setCart={setCart}
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
      />
    </>
  )
}

export default App

export function useCart() {
  return useOutletContext<CartContextType>();
}