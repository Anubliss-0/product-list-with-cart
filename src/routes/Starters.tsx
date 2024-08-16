import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'

type CartProps = {
  id: number;
  quantity: number;
};

type AppContextType = {
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
};

function Starters() {
  const { cart, setCart } = useOutletContext<AppContextType>();

  return (
    <>
    <h2>Starters</h2>
      {data.starters.map((foodItem) => (
        <ProductCard
          id={foodItem.id}
          itemName={foodItem.name}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </>
  )
}

export default Starters