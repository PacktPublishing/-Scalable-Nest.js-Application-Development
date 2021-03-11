import Link from 'next/link';
import Image from 'next/image';
import { Card, Pane, Text, Strong } from 'evergreen-ui';

export default function ProductItem({ product }) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <a>
        <Card elevation={0} background="white" margin={12} padding={16}>
          <Pane display="flex" padding={6} justifyContent="center">
            <Image src={product.thumbnail} width="128" height="128" />
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={6}
          >
            <Text>{product.name}</Text>
            <Strong size={600} marginTop={3}>
              {product.formattedPrice}
            </Strong>
          </Pane>
        </Card>
      </a>
    </Link>
  );
}
