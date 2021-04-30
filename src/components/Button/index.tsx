import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styles from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  available?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  available,
  ...rest
}) => {
  return (
    <RectButton
      style={
        available ? styles.button : { ...styles.button, ...styles.buttonRemove }
      }
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
};
