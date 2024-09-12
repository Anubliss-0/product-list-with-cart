import ProductCard from '../components/ProductCard/ProductCard';
import { useTranslation } from "../i18n";
import data from '../data.json'
import styles from "./ProductList.module.scss"

function Starters() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.title}>{t("starters.title")}</h1>
      <div className={styles.itemList}>
        {data.starters.map((foodItem) => (
          <ProductCard key={foodItem.id} foodItem={foodItem} section='starters'/>
        ))}
      </div>
    </>
  )
}

export default Starters