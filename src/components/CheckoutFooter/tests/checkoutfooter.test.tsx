import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { CheckoutFooter } from '..';

jest.mock('../../../hooks/checkout', () => ({
  useCheckout: () => ({ totalPrice: 10 }),
}));

describe('Product', () => {
  it('renders correctly', async (): Promise<void> => {
    const { container } = render(<CheckoutFooter />);
    await waitFor(() => expect(container).toBeTruthy());
  });
});
