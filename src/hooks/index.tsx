import React from 'react';
import { CheckoutProvider } from './checkout';

export const AppProvider: React.FC = ({ children }) => (
  <CheckoutProvider>{children}</CheckoutProvider>
);
