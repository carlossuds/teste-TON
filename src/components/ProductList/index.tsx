import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Product } from '../../hooks/checkout';

import { ProductItem } from '../ProductItem';

import styles from './styles';
import { colors } from '../../styles/colors';

interface ProductListProps {
  data: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const [products, setProducts] = useState(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.length ? (
        products.map(product => <ProductItem key={product.id} data={product} />)
      ) : (
        <ActivityIndicator size={90} color={colors.green} />
      )}
    </ScrollView>
  );
};
