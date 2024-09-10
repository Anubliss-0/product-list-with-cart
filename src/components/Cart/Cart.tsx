import { useTranslation, Trans } from "../../i18n";
import { flattenAndMapData } from "../../utils/flattenAndMapData";
import styles from "./Cart.module.scss"
import emptyCartImage from "../../../public/assets/images/illustration-empty-cart.svg"
import ConfirmButton from "./ConfirmButton/ConfirmButton";

type CartProps = {
    id: number;
    quantity: number;
};

type CartComponentProps = {
    cart: CartProps[];
    setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
    setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>
};

const dataMap = flattenAndMapData();

function Cart({ cart, setCart, setShowConfirmation }: CartComponentProps) {
    const { t } = useTranslation();

    const total = cart.reduce((sum, item) => {
        const product = dataMap.get(item.id);
        return sum + (product ? product.price * (item.quantity || 1) : 0);
    }, 0);

    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <section className={styles.cartItems}>
            <h2>{`Your cart (${cart.length})`}</h2>
            {cart.length > 0 ? (
                <>
                    <ul aria-live="polite">
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
                                            <button className={styles.removeButton} onClick={() => removeFromCart(item.id)} aria-label={`Remove ${product?.name ?? 'Unknown'} from cart`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
                                            </button>
                                        </div>
                                    </li>
                                    <hr />
                                </>
                            );
                        })}
                    </ul>
                    <div className={styles.cartEnd}>
                        <div className={styles.total}>
                            <span>{t(`orderTotal`)}</span>
                            <h4>€{total.toFixed(2)}</h4>
                        </div>
                        <div className={styles.carbonInfo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z" /><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z" /></svg>
                            <p>
                                <Trans i18nKey="carbonNeutral">
                                    this is a <strong>carbon-neutral</strong> delivery
                                </Trans>
                            </p>
                        </div>
                        <ConfirmButton setShowConfirmation={setShowConfirmation} />
                    </div>
                </>
            ) : (
                <div className={styles.emptyCart}>
                    <img src={emptyCartImage} alt="" />
                    <span>{t(`emptyCart`)}</span>
                </div>
            )}

        </section>
    );
}

export default Cart;