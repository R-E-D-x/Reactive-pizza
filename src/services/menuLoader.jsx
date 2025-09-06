import { getMenu } from './custom-api';

export async function menuLoader() {
  return await getMenu();
}
