import { useOutletContext } from "react-router-dom";

type CartContextType = {
  cart: { id: number; quantity: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ id: number; quantity: number }[]>>;
};

export function useCart() {
  return useOutletContext<CartContextType>();
}