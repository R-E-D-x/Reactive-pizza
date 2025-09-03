import { getMenu } from "./apiRestaurant";

export async function menuLoader() {
  return await getMenu();
}
