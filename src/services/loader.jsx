import { getOrder } from "../services/apiRestaurant";

export async function loader({ params }) {
  return await getOrder(params.orderId);
}
