import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: 60,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    position: 'absolute',
    right: '5%',
    top: '27.5%',
  },
  backButton: {
    position: 'absolute',
    left: '5%',
    top: '27.5%',
  },
  notification: {
    position: 'absolute',
    right: 0,
    top: '12.5%',
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 500,
  },
  itemsInCart: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
