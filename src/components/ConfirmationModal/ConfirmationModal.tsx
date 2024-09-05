/// <reference types="vite-plugin-svgr/client" />
import { flattenAndMapData } from "../../utils/flattenAndMapData";
import { useTranslation } from "../../i18n";
import styles from "./ConfirmationModal.module.scss"
import ConfirmIcon from "../../assets/icons/icon-order-confirmed.svg?react"

type CartProps = {
    id: number;
    quantity: number;
};

type ConfirmationModalProps = {
    cart: CartProps[];
    setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
    showConfirmation: boolean;
    setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>
};

const dataMap = flattenAndMapData();

function ConfirmationModal({ cart, setCart, showConfirmation, setShowConfirmation }: ConfirmationModalProps) {
    const { t } = useTranslation();

    const total = cart.reduce((sum, item) => {
        const product = dataMap.get(item.id);
        return sum + (product ? product.price * (item.quantity || 1) : 0);
    }, 0);

    const resetCart = () => {
        setCart([])
        setShowConfirmation(false)
    }

    if (!showConfirmation) return null;

    return (
        <div className={styles.confirmationContainer}>
            <div className={styles.confrmationModal}>
                <div className={styles.confirmStart}>
                    <ConfirmIcon />
                    <h1>{t("orderConfirmed")}</h1>
                    <span>{t("enjoyYourFood")}</span>
                </div>
                <ul aria-live="polite" className={styles.confirmMiddle}>
                    {cart.map((item) => {
                        const product = dataMap.get(item.id);
                        return (
                            <li key={item.id}>
                                <img src={product?.image.thumbnail} alt="Thumbnail of food" />
                                <span>Item Name: {product?.name ?? 'Unknown'}</span>
                                <span>Quantity: {item.quantity}</span>
                                <span>Price: {product?.price ?? 0}</span>
                                <span>Total: {(product?.price ?? 0) * item.quantity}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.confirmEnd}>
                    <h4>Total Amount: {total.toFixed(2)}</h4>
                    <button onClick={resetCart}>Start new order</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;