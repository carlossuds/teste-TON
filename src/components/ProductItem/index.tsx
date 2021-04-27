import React from 'react';
import { View, Image, Text } from 'react-native';
import Button from '../Button';

import styles from './styles';

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

interface ProductItemProps {
  data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: data.image }} style={styles.productImage} />
      <Text>{data.title.substr(0, 16)}</Text>
      <Text style={styles.productPrice}>{`R$ ${data.price.toFixed(2)}`}</Text>
      <Button title="Adicionar" />
    </View>
  );
};

export default ProductItem;
