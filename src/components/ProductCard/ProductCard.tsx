type CartProps = {
    id: number;
    quantity: number;
};

type ProductCardParams = {
    id: number;
    itemName: string;
    cart: CartProps[];
    setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
}

function ProductCard({ id, itemName, cart, setCart }: ProductCardParams) {
    const itemInCart = cart.find(item => item.id === id);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    const updateCart = (cart: CartProps[], itemId: number, delta: number) => {
        const itemInCart = cart.find(item => item.id === itemId);

        if (itemInCart) {
            const newQuantity = itemInCart.quantity + delta;
            if (newQuantity > 0) {
                return cart.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: newQuantity }
                        : item
                );
            } else {
                return cart.filter(item => item.id !== itemId);
            }
        } else if (delta > 0) {
            return [...cart, { id: itemId, quantity: delta }];
        } else {
            return cart;
        }
    };

    const addItemToCart = () => {
        setCart(prevCart => updateCart(prevCart, id, 1));
    };

    const removeItemFromCart = () => {
        setCart(prevCart => updateCart(prevCart, id, -1));
    };

    return (
        <>
            <p>{itemName}</p>
            <p>{`Quantity: ${quantity}`}</p>
            <button onClick={removeItemFromCart} disabled={quantity === 0}>
                -
            </button>
            <button onClick={addItemToCart}>+</button>
        </>
    );
}

export default ProductCard;