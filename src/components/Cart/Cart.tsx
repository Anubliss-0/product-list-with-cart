import { flattenAndMapData } from "./CartUtils";

type CartProps = {
    id: number;
    quantity: number;
};

type CartComponentProps = {
    cart: CartProps[];
    setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
};

const dataMap = flattenAndMapData();

function Cart({ cart, setCart }: CartComponentProps) {
    const removeFromCart = (id: number) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div>
            {cart.map((item) => {
                const product = dataMap.get(item.id);
                return (
                    <div key={item.id}>
                        <p>Item Name: {product?.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>X</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;