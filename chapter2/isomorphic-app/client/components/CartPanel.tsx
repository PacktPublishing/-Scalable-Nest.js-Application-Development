import {
  Button,
  Card,
  Heading,
  ListItem,
  Pane,
  Strong,
  Text,
  TextInputField,
  UnorderedList,
} from 'evergreen-ui';
import Link from 'next/link';

type CartPanelProps = {
  cartItemCount: number;
  cartTotalFormatted: string;
  cartItems: Record<string, any>[];
  currencySymbol: string;
  updateQuantity: (id: string, qty: number) => void;
};

export default function CartPanel({
  cartItems = [],
  cartItemCount,
  cartTotalFormatted,
  currencySymbol,
  updateQuantity,
}: CartPanelProps) {
  return (
    <Pane
      width={260}
      flex="1"
      display="flex"
      marginTop={32}
      flexDirection="column"
    >
      <Heading paddingY={6} size={600}>
        Your Cart
      </Heading>
      <Pane
        background="#F9FAFB"
        display="flex"
        flexDirection="column"
        padding={6}
        flex="1"
        marginRight={22}
        minWidth={200}
      >
        {cartItemCount > 0 ? (
          <>
            <UnorderedList
              listStyle="none"
              margin={0}
              marginLeft={-1}
              padding={0}
            >
              {cartItems.map(item => (
                <ListItem key={item.id} marginY={12} marginX={0}>
                  <Card
                    display="flex"
                    flexDirection="column"
                    background="white"
                    padding={6}
                  >
                    <Strong fontSize={16}>{item.name}</Strong>
                    <Text paddingY={6}>
                      Price: {currencySymbol}
                      {item.price.toFixed(2)}
                    </Text>
                    <TextInputField
                      label="Qty"
                      onChange={e =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      type="number"
                      min="1"
                      max="10"
                      value={item.quantity}
                    />
                  </Card>
                </ListItem>
              ))}
            </UnorderedList>
            <Text marginY={6} paddingY={12} borderTop={'1px solid #a4a4a4'}>
              Total: <Strong>{cartTotalFormatted}</Strong>
            </Text>
            <Link href="/checkout" passHref>
              <Button appearance="primary">Checkout</Button>
            </Link>
          </>
        ) : (
          <Text padding={12} flex="1">
            You have no items in your cart.
          </Text>
        )}
      </Pane>
    </Pane>
  );
}
