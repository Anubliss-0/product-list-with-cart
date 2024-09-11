import ProductCard from '../components/ProductCard/ProductCard';
import data from '../data.json'
import styles from "./ProductList.module.scss"

function Desserts() {
  return (
    <section>
      <h1 className={styles.title}>Desserts</h1>
      <div className={styles.itemList}>
        {data.desserts.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem} section='desserts' />
        ))}
      </div>
    </section>
  )
}

export default Desserts