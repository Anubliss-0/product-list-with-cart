import { useState } from "react";
import { flattenAndMapData } from "./CartUtils";

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
        <div>
            <h3>Your cart</h3>
            {cart.map((item) => {
                const product = dataMap.get(item.id);
                return (
                    <>
                        <div key={item.id}>
                            <span>Item Name: {product?.name}</span>
                            <span>Quantity: {item.quantity}</span>
                            <span>Price: {product?.price}</span>
                            <span>Total: {product?.price * item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)}>X</button>
                        </div>
                    </>
                );
            })}
            <h4>Total Amount: {total}</h4>
            {cart.length > 0 && <button onClick={showConfirmation}>Confirm Order</button>}
        </div>
    );
}

export default Cart;