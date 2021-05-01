import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

interface CheckoutContextData {
  cartProducts: Product[];
  addToCart(product: Product): void;
  removeFromCart(productId: number): void;
  totalPrice: number;
}

const CheckoutContext = createContext<CheckoutContextData>(
  {} as CheckoutContextData,
);

export const CheckoutProvider: React.FC = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([] as Product[]);

  const addToCart = useCallback(product => {
    setCartProducts(prev => [...prev, product]);
  }, []);

  const removeFromCart = useCallback(productId => {
    setCartProducts(prev => prev.filter(product => product.id !== productId));
  }, []);

  const totalPrice = useMemo<number>(() => {
    const prices = cartProducts.map(product => product.price);

    if (!prices.length) return 0;

    return prices.reduce((acc, curr) => acc + curr);
  }, [cartProducts]);

  return (
    <CheckoutContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export function useCheckout(): CheckoutContextData {
  const context = useContext(CheckoutContext);

  if (!context) throw new Error('CheckoutProvider needed to call useCheckout');

  return context;
}
