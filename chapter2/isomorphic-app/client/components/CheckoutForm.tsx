import { useState } from 'react';
import Head from 'next/head';
import { Button, Card, Heading, Pane, TextInputField } from 'evergreen-ui';
import { getFullURL } from '../utils';

export default function CheckoutForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  return (
    <Pane>
      <Heading size={800} marginX={12} marginY={22}>
        Checkout
      </Heading>
      <form
        onChange={({ currentTarget: { name, value } }) =>
          setForm({ ...form, [name]: value })
        }
      >
        <Pane display="flex" justifyContent="space-evenly">
          <Pane flex="1" marginX={12}>
            <Heading size={700} marginBottom={12}>
              Personal details
            </Heading>
            <Card>
              <TextInputField
                name="FullName"
                label="FullName"
                placeholder="Full name"
              />
              <TextInputField name="Email" label="Email" placeholder="Email" />
              <TextInputField
                name="Address"
                label="Address"
                placeholder="Address"
              />
              <TextInputField
                name="PostCode"
                label="PostCode"
                placeholder="Post Code"
              />
              <TextInputField name="City" label="City" placeholder="City" />
              <TextInputField
                name="Country"
                label="Country"
                placeholder="Country"
              />
            </Card>
          </Pane>
          <Pane flex="1" marginX={12}>
            <Heading size={700} marginBottom={12}>
              Payment Details
            </Heading>
            <Card>
              <TextInputField
                name="CardHolderName"
                label="CardHolderName"
                placeholder="Card Holder Name"
              />
              <TextInputField
                name="CardNumber"
                label="CardNumber"
                placeholder="Card Number"
              />
              <TextInputField
                name="CardExpiry"
                label="CardExpiry"
                placeholder="Card Expiry"
              />
              <TextInputField name="CVV" label="CVV" placeholder="CVV" />
            </Card>
            <Button
              appearance="primary"
              onClick={e => (e.preventDefault(), onSubmit(form))}
            >
              Place Order
            </Button>
          </Pane>
        </Pane>
      </form>
    </Pane>
  );
}
