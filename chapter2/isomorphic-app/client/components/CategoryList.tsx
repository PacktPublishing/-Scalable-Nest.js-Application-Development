import ProductItem from './ProductItem';
import { Heading, Pane } from 'evergreen-ui';

export default function CategoryList({ title, category, products }) {
  return (
    <Pane>
      <Heading size={600} padding={6}>
        {title}
      </Heading>
      <Pane display="flex" flexFlow="wrap">
        {products
          .filter(item => item.category === category)
          .map(item => (
            <ProductItem key={item.id} product={item} />
          ))}
      </Pane>
    </Pane>
  );
}
