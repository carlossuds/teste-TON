import React from 'react';
import { TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
import { Header } from '..';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: (path: string): void => null }),
}));

jest.mock('../../../hooks/checkout', () => ({
  useCheckout: () => ({ cartProducts: Array(10) }),
}));

describe('Header', () => {
  it('renders correctly', async (): Promise<void> => {
    const container = create(<Header />).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('back button is pressed', async (): Promise<void> => {
    const onBack = jest.fn();

    const container = create(<Header onBack={onBack} />).root;

    container.props.onBack();

    expect(onBack).toBeCalled();
  });

  it('navigate to Checkout page', async (): Promise<void> => {
    const navigate = jest.fn();

    const container = create(<Header />).root;

    const Touchable = container.findByType(TouchableOpacity);

    Touchable.props.onPress(navigate());

    expect(navigate).toBeCalled();
  });
});
