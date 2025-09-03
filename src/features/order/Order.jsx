// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { clearCart } from '../cart/cartSlice';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useCopyToClipboard } from '../../hooks/useCopy';
import { useDispatch } from 'react-redux';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const [copy, copied] = useCopyToClipboard();
  const dispatch = useDispatch();
  dispatch(clearCart());

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  // console.log(cart);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="my-4 flex flex-col items-center justify-center py-10">
      <div className="flex flex-col gap-2 bg-[url('/reciept.png')] bg-cover p-8 drop-shadow-xl drop-shadow-gray-600">
        <h2 className="flex items-center justify-center gap-1.5 text-center text-xl">
          Order: <span className="font-bold">{id}</span>
          <div
            className="relative border-b-1 border-black py-1"
            onClick={() => copy(id)}
          >
            <img
              className="animate-pulse cursor-pointer hover:-translate-y-1 hover:animate-none active:-translate-y-1"
              src={copied ? '/clipboard-check.svg' : '/clipboard.svg'}
              alt="clipboard"
            />

            <p
              className={`absolute ${!copied && 'translate-x-3 opacity-0'} -top-1 -right-15 rounded-xl bg-gray-700 p-1 text-sm text-slate-200 transition duration-[2000ms]`}
            >
              Copied!
            </p>
          </div>
        </h2>
        <div className="flex flex-col items-center">
          <h2 className="text-center text-xl">
            Status: <span>{status} order</span>
          </h2>
        </div>
        <div>
          <p>
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left ⌛`
              : 'Order should have arrived'}
          </p>
          <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Description</p>
            <p>price</p>
          </div>
          <hr />

          {cart.map((cartItem) => (
            <div
              key={cartItem.pizzaId}
              className="flex items-center justify-between"
            >
              <p>
                {cartItem.quantity}&times; {cartItem.name}:
              </p>
              <p>{formatCurrency(cartItem.quantity * cartItem.unitPrice)}</p>
            </div>
          ))}
          {priority && (
            <>
              <hr />
              <div className="flex justify-between">
                <p>total pizza price:</p>
                <p>{formatCurrency(orderPrice)}</p>
              </div>
              <div className="flex justify-between">
                <p>Price priority:</p>
                <p>{formatCurrency(priorityPrice)}</p>
              </div>
            </>
          )}
          <hr />
          <div className="flex justify-between">
            <p>To pay on delivery:</p>
            <p>{formatCurrency(orderPrice + priorityPrice)}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">Reactive Pizza inc.</p>
        </div>
        <p className="text-center">Thank you!</p>
      </div>
    </div>
  );
}

export default Order;
