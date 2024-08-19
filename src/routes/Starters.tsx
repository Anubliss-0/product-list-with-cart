import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'

function Starters() {
  return (
    <>
    <h2>Starters</h2>
      {data.starters.map((foodItem) => (
        <ProductCard
          id={foodItem.id}
          itemName={foodItem.name}
        />
      ))}
    </>
  )
}

export default Starters