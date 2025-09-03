import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle';
  return (
    <div className="layout flex h-screen flex-col bg-amber-50">
      <Header />
      <main className="relative box-border flex-1 overflow-hidden overflow-y-auto py-8">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
