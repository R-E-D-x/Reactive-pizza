import { redirect } from 'react-router-dom';
import { createOrder } from './custom-api';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'please Provide a correct phone number';
  }
  if (Object.keys(errors).length > 0) {
    console.log(errors)
    return errors;
  }
  console.log(order)
  const [newOrder] = await createOrder(order);
  console.log('submitted :', newOrder)
  return redirect(`/order/${newOrder.id}`);
}
