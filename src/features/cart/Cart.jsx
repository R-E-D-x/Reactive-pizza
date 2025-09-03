import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div>
      <div className="grid place-items-start sm:grid-cols-3">
        <Link
          to="/menu"
          className="ml-2 rounded-xl bg-amber-400 px-1 py-3 hover:bg-amber-300"
        >
          &larr;Back to menu
        </Link>

        <h2 className="min-w-max place-self-center text-2xl max-sm:hidden">
          Your cart, {username}
        </h2>
      </div>

      <ul className="flex-col items-center md:flex">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex justify-center">
        <div className="flex w-full justify-around">
          <Link
            to="/order/new"
            className="cursor-pointer rounded-2xl border-1 bg-yellow-500 p-2 font-medium hover:bg-yellow-400"
          >
            Order pizzas
          </Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="cursor-pointer rounded-2xl border-1 bg-amber-50 p-2 font-medium text-yellow-600"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
