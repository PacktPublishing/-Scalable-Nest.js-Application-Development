import { Button, Card, Heading, Pane, TextInputField } from 'evergreen-ui';
import Head from 'next/head';
import { useState } from 'react';
import { useAppStateContext } from '../context/state';

export default function RegistrationPage() {
  const [form, setForm] = useState({});
  const { register } = useAppStateContext()

  return (
    <>
      <Head>
        <title>Shop - Registers</title>
      </Head>
      <Heading size={800} marginX={12} marginY={22}>
        Register
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
          <Pane flex="1" marginX={12}>
            <Card>
              <TextInputField
                name="FirstName"
                label="FirstName"
                placeholder="First name"
              />

              <TextInputField
                name="LastName"
                label="LastName"
                placeholder="Lastname name"
              />
              <TextInputField name="Email" label="Email" placeholder="Email" />
              <TextInputField
                type="password"
                name="Password"
                label="Password"
                placeholder="Password"
              />
              <Button
                appearance="primary"
                onClick={e => (e.preventDefault(), register({ form }))}
              >
                Register
              </Button>
            </Card>
          </Pane>
        </Pane>
      </form>
    </>
  );
}
