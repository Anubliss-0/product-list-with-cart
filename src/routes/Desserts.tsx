import ProductCard from '../components/ProductCard/ProductCard';
import { useTranslation } from "../i18n";
import data from '../data.json'
import styles from "./ProductList.module.scss"

function Desserts() {
  const { t } = useTranslation();
  return (
    <section>
      <h1 className={styles.title}>{t("desserts.title")}</h1>
      <div className={styles.itemList}>
        {data.desserts.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem} section='desserts' />
        ))}
      </div>
    </section>
  )
}

export default Desserts