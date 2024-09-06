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
        <div className={styles.confirmationBackground}>
            <div className={styles.conformationModal}>
                <div className={styles.confirmStart}>
                    <ConfirmIcon />
                    <h1>{t("orderConfirmed")}</h1>
                    <span>{t("enjoyYourFood")}</span>
                </div>
                <ul aria-live="polite" className={styles.confirmMiddle}>
                    {cart.map((item) => {
                        const product = dataMap.get(item.id);
                        return (
                            <>
                                <li key={item.id}>
                                    <div className={styles.itemLeft}>
                                        <img src={product?.image.thumbnail} alt="Thumbnail of food" />
                                        <div>
                                            <span>{product?.name ?? 'Unknown'}</span>
                                            <div className={styles.itemLeftEnd}>
                                                <span>{item.quantity}X </span>
                                                <span>@ €{(product?.price ?? 0).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.itemRight}>
                                        <span>€{((product?.price ?? 0) * item.quantity).toFixed(2)}</span>
                                    </div>
                                </li>
                                <hr />
                            </>
                        );
                    })}
                    <li className={styles.listTotal}>
                        <span>{t("orderTotal")}</span>
                        <span>€{total.toFixed(2)}</span>
                    </li>
                </ul>
                <div className={styles.confirmEnd}>
                    <button onClick={resetCart}>Start new order</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;