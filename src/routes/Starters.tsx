import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'

function Starters() {
  return (
    <section>
      <h2>Starters</h2>
        {data.starters.map((foodItem) => (
          <ProductCard
            id={foodItem.id}
            itemName={foodItem.name}
          />
        ))}
    </section>
  )
}

export default Starters