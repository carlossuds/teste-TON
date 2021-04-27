import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { colors } from '../../styles/colors';
import Button from '../Button';
import ProductItem from '../ProductItem';

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

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
