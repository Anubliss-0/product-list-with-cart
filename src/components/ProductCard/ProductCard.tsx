import { useCart } from "../../App";
import styles from "./ProductCard.module.scss"

type CartProps = {
    id: number;
    quantity: number;
};

type ProductCardProps = {
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


function ProductCard({ foodItem }: ProductCardProps) {
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
                alt={foodItem.name}
            />
            <h3>{foodItem.name}</h3>
            <div role="group" aria-live="polite">
                {itemInCart ? (
                    <>
                        <span>{`Quantity: ${quantity}`}</span>
                        <button onClick={removeItemFromCart} disabled={quantity === 0} aria-label="Decrease quantity">
                            -
                        </button>
                        <button onClick={addItemToCart} aria-label="Increase quantity">
                            +
                        </button>
                    </>
                )
                    :
                    (<>
                        <button onClick={addItemToCart}>Add to cart</button>
                    </>)
                }
            </div>
        </article>
    );
}

export default ProductCard;