import ProductCard from '../components/ProductCard/ProductCard';
import data from '../data.json'
import styles from "./ProductList.module.scss"

function Starters() {
  return (
    <>
      <h1 className={styles.title}>Starters</h1>
      <div className={styles.itemList}>
        {data.starters.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem} section='starters'/>
        ))}
      </div>
    </>
  )
}

export default Starters