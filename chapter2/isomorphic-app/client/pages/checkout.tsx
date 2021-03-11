import Head from 'next/head';
import { getFullURL } from '../utils';
import { useAppStateContext } from '../context/state';
import CheckoutForm from '../components/CheckoutForm';

export async function getServerSideProps({ req }) {
  const res = await fetch(getFullURL(req, 'api/begin-checkout'));
  const data = await res.json();

  return {
    props: {
      // Let say our REST API needs a token in the checkout
      // request payload to make sure the order is legit
      requestToken: data.token,
    },
  };
}

export default function CheckoutPage({ requestToken }) {
  const { placeOrder } = useAppStateContext();

  return (
    <>
      <Head>
        <title>Shop - Checkout</title>
      </Head>
      <CheckoutForm
        onSubmit={form => placeOrder({ form })}
        initialData={{ requestToken }}
      />
    </>
  );
}
