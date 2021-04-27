import React, { createContext, useCallback, useContext, useState } from 'react';

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
  removeFromCart(productId: Pick<Product, 'id'>): void;
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

  return (
    <CheckoutContext.Provider
      value={{ cartProducts, addToCart, removeFromCart }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export function useCheckout(): CheckoutContextData {
  const context = useContext(CheckoutContext);

  if (!context)
    throw new Error('useCheckout must be used within a CheckoutProvider');

  return context;
}
