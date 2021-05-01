import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Header } from '..';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: (path: string): void => null }),
}));

jest.mock('../../../hooks/checkout', () => ({
  useCheckout: () => ({ cartProducts: Array(10) }),
}));

describe('Header', () => {
  it('renders correctly', async (): Promise<void> => {
    const { container } = render(<Header />);
    await waitFor(() => expect(container).toBeTruthy());
  });
});
