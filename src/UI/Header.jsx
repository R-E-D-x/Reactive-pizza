import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-1 border-black bg-amber-500 px-10 py-5 font-light text-black">
      <Link to="/" className="text-xl max-sm:text-2xl sm:text-4xl">
        Reactive Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
