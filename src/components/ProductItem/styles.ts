import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  productContainer: {
    height: 200,
    width: '45%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
    marginBottom: 20,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  productImage: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginBottom: 30,
  },
  productPrice: {
    color: colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
