import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'

function Deserts() {

  return (
    <>
    <h2>Deserts</h2>
      {data.deserts.map((foodItem) => (
        <ProductCard
          id={foodItem.id}
          itemName={foodItem.name}
        />
      ))}
    </>
  )
}

export default Deserts