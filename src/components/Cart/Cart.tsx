import { useTranslation } from "../../i18n";
import { flattenAndMapData } from "../../utils/flattenAndMapData";
import styles from "./Cart.module.scss"
import emptyCartImage from "../../../public/assets/images/illustration-empty-cart.svg"

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

    const showConfirmation = () => {
        setShowConfirmation(true)
    };

    return (
        <section className={styles.cart}>
            <h2>{`Your cart (${cart.length})`}</h2>
            {cart.length > 0 ? (
                <ul aria-live="polite">
                    {cart.map((item) => {
                        const product = dataMap.get(item.id);
                        return (
                            <li key={item.id} className={styles.cartItem}>
                                    <div>
                                        <p>{t(`${product?.section}.items.${product?.name}`)}</p>
                                        <span>{item.quantity}x</span>
                                        <span>{product?.price ?? 0}</span>
                                        <span>{(product?.price ?? 0) * item.quantity}</span>
                                    </div>
                                    <div>
                                        <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${product?.name ?? 'Unknown'} from cart`}>
                                            X
                                        </button>
                                    </div>
                            </li>
                        );
                    })}
                    <button onClick={showConfirmation}>Confirm Order</button>
                    <h4>Total Amount: {total.toFixed(2)}</h4>
                </ul>
            ) : (
                <div className={styles.emptyCart}>
                    <img src={emptyCartImage} alt="REPLACE ME WITH I18N!!" />
                    <span>Your added items will appear here</span>
                </div>
            )}

        </section>
    );
}

export default Cart;