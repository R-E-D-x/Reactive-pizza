import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { addToCart } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const bakedData = {
    imageUrl,
    name,
    pizzaId: id,
    quantity: 1,
    unitPrice,
    totalPrice: unitPrice,
  };
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const itemInCart = cart.some((item) => item.pizzaId === id);
  return (
    <li className="mx-auto mb-4 flex justify-between rounded-xl px-4 py-1.5 max-sm:items-center max-sm:gap-4 sm:flex-col">
      <img src={imageUrl} alt={name} className="h-23 rounded-2xl sm:h-50" />

      <div className="flex flex-1 flex-col justify-between">
        <p className="w-50 text-2xl font-semibold">{name}</p>
        <p className="w-50">{ingredients.join(', ')}</p>
        <div className="flex w-full justify-between">
          {!soldOut && <p className="font-bold">{formatCurrency(unitPrice)}</p>}
          {soldOut ? (
            <p className="text-red-400">Sold out</p>
          ) : (
            <button
              disabled={itemInCart}
              className="cursor-pointer rounded-sm border-1 border-black bg-green-600 px-1.5 text-white shadow-gray-600 transition-all hover:shadow-2xl hover:not-disabled:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-red-300 disabled:opacity-40"
              onClick={() => dispatch(addToCart(bakedData))}
            >
              {!itemInCart ? 'add to cart' : 'added'}
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
