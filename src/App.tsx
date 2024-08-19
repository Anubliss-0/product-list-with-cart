import { useState, createContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";

export const ConfirmationContext = createContext(false);

function App() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  return (
    <>
      <h1>Order some fud</h1>
      <nav>
        <Link to={`starters`}>Starters</Link>
        <Link to={`mains`}>Mains</Link>
        <Link to={`deserts`}>Deserts</Link>
      </nav>
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