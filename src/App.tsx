import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);  
return (
    <>
      <h1>Order some fud</h1>
      <nav>
        <Link to={`starters`}>Starters</Link>
        <Link to={`mains`}>Mains</Link>
        <Link to={`deserts`}>Deserts</Link>
      </nav>
      <Outlet context={{ cart, setCart }} />
      <Cart cart={cart}/>
    </>
  )
}

export default App