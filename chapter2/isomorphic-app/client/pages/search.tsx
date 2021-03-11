import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Heading } from 'evergreen-ui';
import { useAppStateContext } from '../context/state';
import ProductList from '../components/ProductList';
import { getFullURL } from '../utils';

export async function getServerSideProps({ req }) {
  const res = await fetch(getFullURL(req, 'api/products'));
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
// index use static props
export default function Search({ products }) {
  const searchResults = { data: products, isLoading: false, isError: false };
  const {
    state: { search = '' },
  } = useAppStateContext();
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState(products);

  useEffect(() => {
    searchResults.isLoading = true;
    searchResults.isError = false;
    console.info('searching...', search, offset);
    // const tx = setTimeout(() => {
    //   clearTimeout(tx)
      // console.info('clear TO', search, offset);

      fetch(`/api/products?offset=${offset}&query=${search}`)
      .then(res => res.json())
      .then(data => {
        console.info('search done...', data);
        setList(data);
        searchResults.data = data;
        searchResults.isLoading = false;
        searchResults.isError = false;
      })
      .catch(() => {
        searchResults.isError = true;
      });
    // },5000)
    }, [search, offset]);
  console.info({ searchResults, products });
  return (
    <>
      <Head>
        <title>Shop - Search</title>
      </Head>
      <Heading>{search ? `Search results for "${search}"` : ''}</Heading>
      <ProductList
        {...{
          products: list.map(item => ({
            ...item,
          })),
          isLoading: searchResults.isLoading,
          isError: searchResults.isError,
          onLoadMore: () => setOffset(offset),
        }}
      />
    </>
  );
}
