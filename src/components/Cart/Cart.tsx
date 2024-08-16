import data from '../../assets/data.json';

type CartProps = {
    id: number;
    quantity: number;
};

const flattenedData = Object.values(data).flatMap(items => items);
const dataMap = new Map(flattenedData.map(item => [item.id, item]));

function Cart({ cart }: { cart: CartProps[] }) {
    return (
        <div>
            {cart.map((item) => {
                const product = dataMap.get(item.id);
                return (
                    <div key={item.id}>
                        <p>Item Name: {product?.name}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;