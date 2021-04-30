import React from 'react';
import { View, Text } from 'react-native';
import { useCheckout } from '../../hooks/checkout';

import styles from './style';

export const CheckoutFooter: React.FC = () => {
  const { totalPrice } = useCheckout();

  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.totalValue}>R$ {totalPrice.toFixed(2)}</Text>
    </View>
  );
};
