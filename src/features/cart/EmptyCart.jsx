import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mt-3 grid h-2/3 place-items-center">
      <Link
        to="/menu"
        className="ml-2 place-self-start rounded-xl bg-amber-400 px-1 py-3 hover:bg-amber-300"
      >
        &larr; Back to menu
      </Link>

      <p className="text-center text-xl sm:text-3xl">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
