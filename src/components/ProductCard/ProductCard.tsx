import { useCart } from "../../App";

type CartProps = {
    id: number;
    quantity: number;
};

type ProductCardParams = {
    id: number;
    itemName: string;
}

function ProductCard({ id, itemName }: ProductCardParams) {
    const { cart, setCart } = useCart();
    const itemInCart = cart.find(item => item.id === id);
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

    const addItemToCart = () => setCart(prevCart => updateCart(prevCart, id, 1));

    const removeItemFromCart = () => setCart(prevCart => updateCart(prevCart, id, -1));

    return (
        <article>
            <p>{itemName}</p>
            <div role="group">
                {itemInCart ? (
                    <>
                        <span>{`Quantity: ${quantity}`}</span>
                        <button onClick={removeItemFromCart} disabled={quantity === 0}>
                            -
                        </button>
                        <button onClick={addItemToCart}>
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