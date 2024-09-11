import { useTranslation } from "../../i18n";
import styles from "./CartItemsList.module.scss"

type CartItemsListProps = {
    cart: {
        id: number;
        quantity: number;
    }[];
    removeFromCart: (id: number) => void;
    dataMap: Map<number, { section: string; name: string; price: number }>;
};

const CartItemsList = ({ cart, removeFromCart, dataMap }: CartItemsListProps) => {
    const { t } = useTranslation();

    return (
        <ul className={styles.cartItemList} aria-live="polite">
            {cart.map((item) => {
                const product = dataMap.get(item.id);
                return (
                    <>
                        <li key={item.id} className={styles.cartItem}>
                            <div className={styles.left}>
                                <p>{t(`${product?.section}.items.${product?.name}`)}</p>
                                <div>
                                    <span>{item.quantity}x</span>
                                    <span>@ €{(product?.price ?? 0).toFixed(2)}</span>
                                    <span>€{((product?.price ?? 0) * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => removeFromCart(item.id)}
                                    aria-label={`${t('ariaLabels.removeFromCart')} ${t(`${product?.section}.items.${product?.name}`)}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
                                </button>
                            </div>
                        </li>
                        <hr />
                    </>
                );
            })}
        </ul>
    );
};

export default CartItemsList;