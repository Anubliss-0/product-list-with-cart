import { useCart } from "../../utils/useCart";
import { useTranslation } from "../../i18n";
import addToCartIcon from "../../assets/icons/icon-add-to-cart.svg"

import styles from "./ProductCard.module.scss"

type CartProps = {
    id: number;
    quantity: number;
};

type ProductCardProps = {
    section: string;
    foodItem: {
        id: number;
        name: string;
        image: {
            thumbnail: string;
            mobile: string;
            tablet: string;
            desktop: string;
        };
        category: string;
        price: number;
    };
};


function ProductCard({ foodItem, section }: ProductCardProps) {
    const { t } = useTranslation();
    const { cart, setCart } = useCart();
    const itemInCart = cart.find(item => item.id === foodItem.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    const updateCart = (cart: CartProps[], itemId: number, delta: number): CartProps[] => {
        return cart.reduce((updatedCart, item) => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + delta;
                if (newQuantity > 0) {
                    updatedCart.push({ ...item, quantity: newQuantity });
                }
            } else {
                updatedCart.push(item);
            }
            return updatedCart;
        }, [] as CartProps[]).concat(
            !cart.some(item => item.id === itemId) && delta > 0
                ? [{ id: itemId, quantity: delta }]
                : []
        );
    };

    const addItemToCart = () => setCart(prevCart => updateCart(prevCart, foodItem.id, 1));

    const removeItemFromCart = () => setCart(prevCart => updateCart(prevCart, foodItem.id, -1));

    return (
        <article className={styles.productCard}>
            <picture className={itemInCart ? styles.imageBorder : ''}>
                <source media="(max-width: 530px)" srcSet={foodItem.image.mobile} />
                <source media="(max-width: 1165px)" srcSet={foodItem.image.tablet} />
                <source media="(min-width: 1165px)" srcSet={foodItem.image.desktop} />
                <img src="./assets/images/image-waffle-desktop.jpg" alt={t(foodItem.name)} />
            </picture>
            <div role="group" aria-live="polite">
                {itemInCart ? (
                    <>
                        <fieldset className={[styles.quantityButtons, styles.cartPill].join(' ')}>
                            <button
                                onClick={removeItemFromCart}
                                disabled={quantity === 0}
                                aria-label={t(`ariaLabels.decreaseQuantity`)}
                                className={styles.quantityIcon}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z" /></svg>                            </button>
                            <span>{quantity}</span>
                            <button onClick={addItemToCart}
                                aria-label={t(`ariaLabels.increaseQuantity`)}
                                className={styles.quantityIcon}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
                            </button>
                        </fieldset>
                    </>
                )
                    :
                    (<>
                        <button
                            onClick={addItemToCart}
                            className={[styles.addButton, styles.cartPill].join(' ')}
                            aria-label={t("addToCart")}
                        >
                            <img src={addToCartIcon} />
                            {t(`addToCart`)}
                        </button>
                    </>)
                }
            </div>
            <div className={styles.cardText}>
                <span>{t(`${section}.category.${foodItem.category}`)}</span>
                <h3>{t(`${section}.items.${foodItem.name}`)}</h3>
                <span>€{foodItem.price.toFixed(2)}</span>
            </div>
        </article>
    );
}

export default ProductCard;