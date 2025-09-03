import html2canvas from "html2canvas";

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function calcTotalPrice(cart) {
  return cart.reduce((acc, item) => acc + item.totalPrice, 0);
}
export function calcTotalPizzas(cart) {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}
export async function copyText(text) {
  return await navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}

export async function Screenshot(captureRef) {
  if (!captureRef.current) return;
  const canvas = await html2canvas(captureRef.current);
  const link = document.createElement("a");
  link.download = "screenshot.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}