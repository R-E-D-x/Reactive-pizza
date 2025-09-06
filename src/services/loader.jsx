import { getOrder } from './custom-api';

export async function loader({ params }) {
  return await getOrder(params.orderId);
}
