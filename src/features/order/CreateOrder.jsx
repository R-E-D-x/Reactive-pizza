import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../user/userSlice';
import GeoAltIcon from '../../Icons/GeoAltIcon';
import { useNavigate } from 'react-router-dom';
function CreateOrder() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { cart } = useSelector((state) => state.cart);
  const [withPriority, setWithPriority] = useState(false);
  const { username, address, status, error } = useSelector(
    (state) => state.user,
  );
  const [phone, setPhone] = useState('');

  // Checking if there is no cart in the order
  useEffect(() => {
    // redirecting to the home page if no name otherwise to the menu
    if (!username && cart.length === 0) navigate('/');
    if (cart.length === 0 && navigation.state === 'idle') navigate('/menu');

    // we want only to check it on component mount
  }, []); // eslint-disable-line

  const isLoading = navigation.state !== 'idle';
  const formErrors = useActionData();
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="mt-20 mb-8 text-2xl">Ready to order? Let's go!</h2>

        <Form method="POST" className="flex w-80 flex-col gap-3.5 md:w-3xl">
          <div className="grid grid-cols-2">
            <label className="pr-4 text-end">First Name</label>
            <input
              defaultValue={username}
              className="rounded-sm border-1 px-2 py-0.5"
              type="text"
              name="customer"
              required
            />
          </div>

          <div className="grid grid-cols-2">
            <label className="pr-4 text-end">Phone number</label>

            <input
              className="rounded-sm border-1 px-2 py-0.5"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <span className="col-span-2 text-right text-sm font-semibold text-red-800">
                {formErrors?.phone}*
              </span>
            )}
          </div>

          <div className="grid grid-cols-2">
            <label className="pr-4 text-end">Address</label>

            <div className="flex">
              <input
                className="w-full flex-1 rounded-l-sm border-1 border-r-0 px-2 py-0.5"
                defaultValue={address}
                type="text"
                name="address"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                className="flex items-center justify-center rounded-r-sm border-1 border-l-1 bg-amber-100 px-2.5 hover:bg-amber-200"
              >
                <div className="flex h-full w-full items-center justify-center border-l-0 hover:scale-130">
                  {status !== 'loading' ? (
                    <GeoAltIcon className="" />
                  ) : (
                    <div className="h-5 w-5 animate-spin rounded-full border-1 border-black border-r-amber-800"></div>
                  )}
                </div>
              </button>
            </div>
            {status === 'error' && (
              <span className="col-span-2 text-right text-sm font-semibold text-red-800">
                {error}*
              </span>
            )}
          </div>

          <div className="flex justify-center gap-3.5">
            <label htmlFor="priority" className="">
              Want to yo give your order priority?
              <span className="text-sm text-red-300"> (+2$)</span>
            </label>
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
          </div>
          <input name="cart" defaultValue={JSON.stringify(cart)} hidden />
          <div className="flex items-center justify-end gap-2.5">
            <span className="text-sm"> ready? </span>
            <button
              className="cursor-pointer rounded-xl border-1 border-black bg-green-600 p-1 text-white transition-all hover:-translate-y-1 disabled:cursor-progress disabled:opacity-55"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Order now'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateOrder;
