import { Pane } from 'evergreen-ui';
import { useAppStateContext } from '../context/state';
import CartPanel from './CartPanel';
import NavBar from './NavBar';

export default function PageContainer({ children }) {
  const {
    state,
    handleSearch,
    updateQuantity,
    formatCurrency,
  } = useAppStateContext();
  const cartItemCount = Object.values(state.cartItems).length;
  const cartTotal: number = Object.values<Record<string, any>>(
    state.cartItems,
  ).reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  const formattedTotal = formatCurrency(cartTotal);

  return (
    <Pane className="page-container">
      <NavBar
        search={state.search}
        cartItemCount={cartItemCount}
        cartTotalFormatted={formattedTotal}
        handleSearch={value => handleSearch(value)}
      />
      <Pane className="main-container" width="100vw">
        <Pane width="100vw" className="main-content">
          <Pane>{children}</Pane>
          <Pane display="flex" margin={16} marginTop={32}>Copyright &copy; 2021 Shop site.</Pane>
        </Pane>
        <CartPanel
          cartItems={Object.values(state.cartItems)}
          cartItemCount={cartItemCount}
          cartTotalFormatted={formattedTotal}
          currencySymbol={state.currencySymbol}
          updateQuantity={updateQuantity}
        />
      </Pane>
    </Pane>
  );
}
