import { useCart } from "../../App";
import { useTranslation } from "../../i18n";

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
            <img
                srcSet={`
                    ${foodItem.image.mobile} 480w,
                    ${foodItem.image.tablet} 768w,
                    ${foodItem.image.desktop} 1200w
                `}
                sizes={`
                    (max-width: 480px) 480px,
                    (max-width: 768px) 768px,
                    1200px
                `}
                src={foodItem.image.desktop}
                alt={t(`${section}.items.${foodItem.name}`)}
            />
            <div role="group" aria-live="polite">
                {itemInCart ? (
                    <>
                        <span>{`Quantity: ${quantity}`}</span>
                        <button onClick={removeItemFromCart} disabled={quantity === 0} aria-label={t(`ariaLabels.decreaseQuantity`)}>
                            -
                        </button>
                        <button onClick={addItemToCart} aria-label={t(`ariaLabels.increaseQuantity`)}>
                            +
                        </button>
                    </>
                )
                    :
                    (<>
                        <button onClick={addItemToCart}>{t(`addToCart`)}</button>
                    </>)
                }
            </div>
            <span>{t(`${section}.category.${foodItem.category}`)}</span>
            <h3>{t(`${section}.items.${foodItem.name}`)}</h3>
            <span>{foodItem.price.toFixed(2)}</span>
        </article>
    );
}

export default ProductCard;