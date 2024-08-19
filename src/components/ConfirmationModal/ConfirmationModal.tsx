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

function ConfirmationModal({ cart, setCart, showConfirmation, setShowConfirmation }: ConfirmationModalProps) {

    const resetCart = () => {
        setCart([])
        setShowConfirmation(false)
    }

    if (!showConfirmation) return null;

    return (
        <div>
            Order confirmed.
            <button onClick={resetCart}>New order</button>
        </div>
    );
}

export default ConfirmationModal;