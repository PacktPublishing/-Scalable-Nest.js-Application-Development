import { Button, Card, Heading, Pane, TextInputField } from 'evergreen-ui';
import Head from 'next/head';
import { useState } from 'react';
import { useAppStateContext } from '../context/state';

export default function CheckoutPage() {
  const app = useAppStateContext();
  const [form, setForm] = useState({});

  return (
    <>
      <Head>
        <title>Shop - Login</title>
      </Head>
      <Heading size={800} marginX={12} marginY={22}>
        Login
      </Heading>
      <form
        onChange={({ currentTarget: { name, value } }) =>
          setForm({ ...form, [name]: value })
        }
      >
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          width={300}
          justifyContent="center"
        >
          <Card flex="1" marginX={12}>
            <TextInputField name="Email" label="Email" placeholder="Email" />
            <TextInputField
              type="password"
              name="Password"
              label="Password"
              placeholder="Password"
            />
            <Button
              appearance="primary"
              onClick={e => (e.preventDefault(), app.login({ form }))}
            >
              Login
            </Button>
          </Card>
        </Pane>
      </form>
    </>
  );
}
