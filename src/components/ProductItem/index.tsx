import React, { useCallback, useMemo } from 'react';
import { View, Image, Text } from 'react-native';

import { Product, useCheckout } from '../../hooks/checkout';

import Button from '../Button';

import styles from './styles';

interface ProductItemProps {
  data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const { cartProducts, addToCart, removeFromCart } = useCheckout();

  const isAvailable = useMemo(() => {
    const [productInCart] = cartProducts.filter(
      product => product.id === data.id,
    );

    return !productInCart;
  }, [cartProducts, data.id]);

  const handleProductCheckout = useCallback(
    product => {
      if (isAvailable) {
        addToCart(product);
        return;
      }
      removeFromCart(product.id);
    },
    [addToCart, isAvailable, removeFromCart],
  );

  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: data.image }} style={styles.productImage} />
      <Text>{data.title.substr(0, 16)}</Text>
      <Text style={styles.productPrice}>{`R$ ${data.price.toFixed(2)}`}</Text>
      <Button
        title={isAvailable ? 'Adicionar' : 'Remover'}
        onPress={() => handleProductCheckout(data)}
        available={isAvailable}
      />
    </View>
  );
};

export default ProductItem;
