import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCheckout } from '../../hooks/checkout';

import styles from './styles';
import { colors } from '../../styles/colors';
import { Button } from '../Button';

export const CheckoutList: React.FC = () => {
  const { cartProducts, removeFromCart } = useCheckout();
  const { navigate } = useNavigation();

  const CART_PRODUCTS = (
    <>
      <Text style={styles.summaryText}>
        {cartProducts.length} produtos no carrinho:
      </Text>
      {cartProducts.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <View style={styles.productContent}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productData}>
              <Text style={styles.productTitle}>
                {product.title.substr(0, 16)}
              </Text>
              <Text style={styles.productPrice}>{`R$ ${product.price.toFixed(
                2,
              )}`}</Text>
            </View>
          </View>
          <RectButton onPress={() => removeFromCart(product.id)}>
            <Ionicons name="ios-close" size={30} color={colors.red} />
          </RectButton>
        </View>
      ))}
    </>
  );

  const EMPTY_CART_MESSAGE = (
    <View style={styles.messageWrapper}>
      <Text style={styles.emptyCartTitle}>Carrinho vazio</Text>
      <Text style={styles.emptyCartMessage}>
        Volte à Página Inicial para adicionar itens ao seu carrinho
      </Text>
      <Button title="Voltar" available onPress={() => navigate('Main')} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cartProducts.length ? CART_PRODUCTS : EMPTY_CART_MESSAGE}
    </ScrollView>
  );
};
