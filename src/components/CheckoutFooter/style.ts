import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    borderTopColor: colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.green,
  },
});

export default styles;
