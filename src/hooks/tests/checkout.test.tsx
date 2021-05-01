import { useCheckout } from '../checkout';

let MOCK_PRODUCTS = [
  {
    category: 'string',
    description: 'string',
    id: 1,
    image: 'string',
    price: 15.99,
    title: 'string',
  },
];

const mockAddToCart = jest.fn(product => {
  MOCK_PRODUCTS.push(product);
});

const mockRemoveFromCart = jest.fn(id => {
  MOCK_PRODUCTS = MOCK_PRODUCTS.filter(product => product.id !== id);
});

jest.mock('../checkout', () => ({
  useCheckout: () => ({
    cartProducts: MOCK_PRODUCTS,
    addToCart: mockAddToCart,
    removeFromCart: mockRemoveFromCart,
    totalPrice: 15.99,
  }),
}));

describe('useCheckout', (): void => {
  it('# of items on cart', (): void => {
    const { cartProducts } = useCheckout();

    expect(cartProducts.length).toBe(1);
  });

  it('should display correct totalPrice', (): void => {
    const { totalPrice } = useCheckout();

    expect(totalPrice).toBe(15.99);
  });

  describe('successfully added items to cart', (): void => {
    const { cartProducts, addToCart } = useCheckout();

    beforeEach((): void => {
      addToCart({
        category: 'string',
        description: 'string',
        id: 2,
        image: 'string',
        price: 5.99,
        title: 'string',
      });
    });

    test('should return updated cartProducts length', (): void => {
      expect(cartProducts.length).toBe(2);
    });
  });

  describe('successfully remove items from cart', (): void => {
    const { removeFromCart } = useCheckout();

    beforeEach((): void => {
      removeFromCart(1);
    });

    test('should return updated cartProducts length', (): void => {
      expect(MOCK_PRODUCTS.length).toBe(1);
    });
  });
});
