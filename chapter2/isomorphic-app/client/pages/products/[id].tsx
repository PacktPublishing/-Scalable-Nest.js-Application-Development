import { useState } from 'react';
import ProductDetailPane from '../../components/ProductDetailPane';
import { useAppStateContext } from '../../context/state';
import { getFullURL } from '../../utils';

export async function getServerSideProps({ req, params }) {
  const res = await fetch(getFullURL(req, `api/products/${params.id}`));
  const product = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }
  return { props: { product } };
}

export async function getServerSidePaths(req) {
  const res = await fetch(getFullURL(req, `/api/products`));
  const products = await res.json();

  // Define the dynamic route paths
  const paths = products.map(product => `/products/${product.id}`);

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default function ProductDetailPage({ product }) {
  const app = useAppStateContext();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ProductDetailPane
        product={product}
        quantity={quantity}
        onChangeQuantity={setQuantity}
        onClickAddToCart={app.addToCart}
      />
    </>
  );
}
