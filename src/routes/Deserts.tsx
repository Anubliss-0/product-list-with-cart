import ProductCard from '../components/ProductCard/ProductCard';
import data from '../data.json'
import styles from "./ProductList.module.scss"

function Deserts() {
  return (
    <>
      <h1 className={styles.title}>Deserts</h1>
      <div className={styles.itemList}>
        {data.desserts.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem} section='desserts'/>
        ))}
      </div>
    </>
  )
}

export default Deserts