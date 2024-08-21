import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'

function Deserts() {

  return (
    <section>
      <h2>Deserts</h2>
        {data.deserts.map((foodItem) => (
          <ProductCard
            id={foodItem.id}
            itemName={foodItem.name}
          />
        ))}
    </section>
  )
}

export default Deserts