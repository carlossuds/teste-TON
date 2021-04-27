import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.green,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  buttonRemove: {
    backgroundColor: colors.red,
  },
});

export default styles;
