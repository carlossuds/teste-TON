import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import { Product } from '../../hooks/checkout';

import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';

import { api } from '../../services/api';

import styles from './styles';

export const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    const loadProducts = async (): Promise<void> => {
      try {
        const response = await api.get<Product[]>('/products');
        const { data } = response;

        setProducts(data);
      } catch {
        Alert.alert('Whooops. There was an error while fetching Products');
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <ProductList data={products} />
      </View>
    </>
  );
};
