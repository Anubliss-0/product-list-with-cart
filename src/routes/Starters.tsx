import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'
import styles from "./ProductList.module.scss"

function Starters() {
  return (
    <>
      <h2>Starters</h2>
      <div className={styles.itemList}>
        {data.starters.map((foodItem) => (
          <ProductCard
            id={foodItem.id}
            itemName={foodItem.name}
          />
        ))}
      </div>
    </>
  )
}

export default Starters