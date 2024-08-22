import ProductCard from '../components/ProductCard/ProductCard';
import data from '../assets/data.json'
import styles from "./ProductList.module.scss"

function Deserts() {
  return (
    <>
      <h1>Deserts</h1>
      <div className={styles.itemList}>
        {data.deserts.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem}/>
        ))}
      </div>
    </>
  )
}

export default Deserts