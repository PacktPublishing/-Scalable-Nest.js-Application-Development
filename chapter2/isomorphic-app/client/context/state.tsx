import { createContext, useContext, useState } from 'react';

const initalState: Record<string, any> = {
  cartItems: {},
  cartItemCount: 0,
  cartTotal: 0.0,
  currencyCode: 'GBP',
  currencySymbol: '£',
  cartTotalFormatted: '£0.00',
};

const AppStateContext = createContext<AppStateContextAPI>(
  createContextAPI(initalState, () => {}), 
);

interface AppStateContextAPI {
  state: Record<string, any>;
  formatCurrency: (value: number) => string;
  addToCart: (value: any) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  handleSearch: (value: string) => void;
  placeOrder: (form: any) => void;
  register: (form: any) => void;
  login: (form: any) => void;
}

function createContextAPI(state, setState): AppStateContextAPI {
  return {
    state,
    addToCart(item) {
      setState({
        ...state,
        cartItems: {
          ...state.cartItems,
          [item.id]: {
            ...item,
            quantity: (state.cartItems[item.id]?.quantity || 0) + item.quantity,
          },
        },
      });
    },
    handleSearch(value) {
      setState({
        ...state,
        search: value,
      });
    },
    updateQuantity(itemId, quantity) {
      setState({
        ...state,
        cartItems: {
          ...state.cartItems,
          [itemId]: {
            ...state.cartItems[itemId],
            quantity,
          },
        },
      });
    },
    formatCurrency(value = 0) {
      return `${state.currencySymbol}${value.toFixed(2)}`;
    },
    placeOrder(order) {
      console.info({ order });
    },
    register() {},
    login() {},
  };
}

export function AppStateProvider({ children }) {
  let [state, setState] = useState(initalState);

  return (
    <AppStateContext.Provider value={createContextAPI(state, setState)}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStateContext() {
  return useContext<AppStateContextAPI>(AppStateContext);
}
