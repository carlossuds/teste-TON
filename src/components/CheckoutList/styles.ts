import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  summaryText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
  },
  productContainer: {
    flexDirection: 'row',
    height: 120,
    marginBottom: 20,
    alignItems: 'center',
  },
  productContent: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.green,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    height: 80,
    width: 80,
    marginRight: 20,
  },
  productData: {
    flex: 1,
    height: '100%',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    color: colors.green,
  },
  messageWrapper: {
    flex: 1,
    marginTop: '50%',
    alignItems: 'center',
  },
  emptyCartTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptyCartMessage: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
