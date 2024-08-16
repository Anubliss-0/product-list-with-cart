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

function Deserts() {
  const { cart, setCart } = useOutletContext<AppContextType>();

  return (
    <>
    <h2>Deserts</h2>
      {data.deserts.map((foodItem) => (
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

export default Deserts