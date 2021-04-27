import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styles from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, active = false, ...rest }) => {
  return (
    <RectButton style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
};

export default Button;
