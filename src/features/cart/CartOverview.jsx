import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { calcTotalPizzas } from '../../utils/helpers';

function cartNotAllowed(path) {
  if (path === '/' || path.startsWith('/cart') || path.startsWith('/order'))
    return true;

  return false;
}

function CartOverview() {
  const totalCart = useSelector((state) => calcTotalPizzas(state.cart.cart));
  const location = useLocation();

  // const totalCart = 1;
  if (cartNotAllowed(location.pathname)) return null;
  return (
    <Link
      to="/cart"
      className="absolute right-5 bottom-5 drop-shadow-xl drop-shadow-amber-200"
    >
      <div className="relative box-border rounded-full bg-amber-300 p-4">
        <Cart size={50} className="scale-x-[-1]" />
        <div className="absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
          <p className="text-xl text-white">{totalCart}</p>
        </div>
      </div>
    </Link>
  );
}
function Cart({ size = 16, color = 'black', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      className={className}
      viewBox="0 0 16 16"
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  );
}
export default CartOverview;
