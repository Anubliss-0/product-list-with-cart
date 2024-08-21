import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'
import styles from "./ProductList.module.scss"

function Deserts() {
  return (
    <>
      <h2>Deserts</h2>
      <div className={styles.itemList}>
        {data.deserts.map((foodItem) => (
          <ProductCard
            id={foodItem.id}
            itemName={foodItem.name}
          />
        ))}
      </div>
    </>
  )
}

export default Deserts