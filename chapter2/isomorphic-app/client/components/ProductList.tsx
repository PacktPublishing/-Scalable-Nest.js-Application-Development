import { Alert, Pane } from 'evergreen-ui';
import CategoryList from './CategoryList';

export default function ProductList({ products, isError }) {
  const groupedByCategory = products.reduce(
    (grp, item) => ({
      ...grp,
      [item.category]: grp[item.category]
        ? [...grp[item.category], item]
        : [item],
    }),
    {},
  );

  return (
    <Pane>
      {isError ? <Alert>Error</Alert> : null}
      <Pane display="flex" justifyContent="center"></Pane>
      {!products?.length ? (
        <Alert marginTop={36}>No products available.</Alert>
      ) : (
        <>
          {Object.entries(groupedByCategory).map(([key, value]) => (
            <CategoryList
              {...{
                title: value[0].category,
                key: key,
                category: key,
                products: value,
              }}
            />
          ))}
        </>
      )}
    </Pane>
  );
}
