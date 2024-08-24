import { flattenAndMapData } from "../../utils/flattenAndMapData";

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
        <div>
            Order confirmed
            <ul aria-live="polite">
                {cart.map((item) => {
                    const product = dataMap.get(item.id);
                    return (
                        <li key={item.id}>
                            <span>Item Name: {product?.name ?? 'Unknown'}</span>
                            <span>Quantity: {item.quantity}</span>
                            <span>Price: {product?.price ?? 0}</span>
                            <span>Total: {(product?.price ?? 0) * item.quantity}</span>
                        </li>
                    );
                })}
            </ul>
            <h4>Total Amount: {total.toFixed(2)}</h4>
            <button onClick={resetCart}>Start new order</button>
        </div>
    );
}

export default ConfirmationModal;