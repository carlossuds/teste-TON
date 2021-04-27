import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { ProductList } from '../../components/ProductList';
import { api } from '../../services/api';
import styles from './styles';

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    const loadProducts = async () => {
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
    <View style={styles.container}>
      <ProductList data={products} />
    </View>
  );
};
