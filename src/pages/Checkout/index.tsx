import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Header } from '../../components/Header';

import styles from './styles';
import { CheckoutList } from '../../components/CheckoutList';
import { CheckoutFooter } from '../../components/CheckoutFooter';

export const Checkout: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <Header onBack={goBack} />
      <View style={styles.container}>
        <CheckoutList />
        <CheckoutFooter />
      </View>
    </>
  );
};
