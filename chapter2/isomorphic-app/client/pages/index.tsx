import Head from 'next/head';
import ProductList from '../components/ProductList';
import { fetcher, getAPIBaseUrl } from '../utils';
import useSWR from 'swr';
import { Button, Pane } from 'evergreen-ui';

export async function getStaticProps({ req }) {
  const data = await fetcher(`${getAPIBaseUrl()}/api/products`);

  return {
    props: {
      products: data,
    },
  };
}

export default function Home({ products }) {
  const { data, error, revalidate } = useSWR('/api/products', fetcher, {
    initialData: products,
  });

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      {!products.length ? 'test' : ''}
      <ProductList
        {...{
          products: (data.length ? data : products).map(item => ({
            ...item,
          })),
          isError: !!error,
        }}
      />
      <Pane display="flex" justifyContent="center">
        <Button onClick={() => revalidate()}>Load more</Button>
      </Pane>
    </>
  );
}
