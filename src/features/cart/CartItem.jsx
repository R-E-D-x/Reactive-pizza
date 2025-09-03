import { formatCurrency } from '../../utils/helpers';
import DashIcon from '../../Icons/DashIcon';
import PlusIcon from '../../Icons/PlusIcon';
import { decreaseQuantity, deleteItem, increaseQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <li className="m-2 flex place-items-center items-center justify-between rounded-xl border-1 border-amber-950 bg-amber-100 sm:grid-cols-5 md:w-3/4 lg:w-1/2">
      <img
        src={imageUrl}
        alt=""
        className="mr-2.5 box-border w-15 rounded-2xl p-1"
      />
      <p className="flex-1 text-center text-xl">
        <span className="flex items-center justify-center font-bold max-sm:text-sm">
          {quantity}
          &times;
        </span>
        <span className=""> {name} </span>
      </p>
      <div className="my-2 flex flex-col items-center justify-center gap-1.5 sm:flex-row">
        <div className="mx-3 flex">
          <button
            onClick={() => dispatch(decreaseQuantity(pizzaId))}
            className="flex cursor-pointer items-center justify-center"
          >
            <DashIcon className="h-8 rounded-l-full border-1 border-r-0 border-amber-800 hover:bg-amber-600 hover:fill-amber-50" />
          </button>
          <p className="flex h-8 cursor-default items-center border-1 border-x-0 border-amber-800 px-4">
            {quantity}
          </p>
          <button
            onClick={() => dispatch(increaseQuantity(pizzaId))}
            className="flex cursor-pointer items-center justify-center"
          >
            <PlusIcon className="h-8 rounded-r-full border-1 border-l-0 border-amber-800 hover:bg-amber-600 hover:fill-amber-50" />
          </button>
        </div>
        <div>
          <p className="text-sm">{formatCurrency(totalPrice)}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteItem(pizzaId))}>
        <img
          src="/trash.svg"
          alt="trash-icon"
          className="mr-2 h-6 cursor-pointer hover:scale-125 sm:ml-2"
        />
      </button>
    </li>
  );
}

export default CartItem;
