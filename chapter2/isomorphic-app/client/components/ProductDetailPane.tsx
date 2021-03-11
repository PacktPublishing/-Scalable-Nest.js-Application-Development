import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Heading,
  Pane,
  Paragraph,
  Strong,
  TextInputField,
} from 'evergreen-ui';

export default function ProductDetailPane({
  product,
  quantity,
  onChangeQuantity,
  onClickAddToCart,
}) {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      flex="1"
      background="white"
      padding={12}
    >
      <Pane display="flex" padding={12}>
        <Pane flex="1">
          <Image src={product.thumbnail} width="512" height="512" />
        </Pane>
        <Pane
          flex="1"
          paddingX={12}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading size={700} paddingY={6} paddingTop={12} marginBottom={12}>
            {product.name}
          </Heading>
          <Pane paddingY={6}>
            <Heading>Details:</Heading>
            <Paragraph>{product.details}</Paragraph>
          </Pane>
          <div>
            <span>Price: </span>
            <Strong size={600}>{product.formattedPrice}</Strong>
            <TextInputField
              label="Quantity"
              id="order-quantity"
              labelFor="order-quantity"
              onChange={e => onChangeQuantity(Number(e.target.value))}
              type="number"
              min="1"
              max="10"
              paddingTop={12}
              value={quantity}
            />
            <Button
              appearance="primary"
              onClick={() => onClickAddToCart({ ...product, quantity })}
            >
              Add to cart
            </Button>
          </div>
        </Pane>
      </Pane>
      <Pane padding={6}>
        <Heading size={600} paddingTop={16} paddingBottom={6}>
          Description
        </Heading>
        <Paragraph>{product.description}</Paragraph>
      </Pane>
    </Pane>
  );
}
