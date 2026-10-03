export const TAX_RATE = 0.07; // fixed 7% VAT

const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

// Quantity x Unit Rate (inputs are stored as strings, so convert safely)
export function calculateItemAmount(item) {
  const qty = Number(item.quantity) || 0;
  const rate = Number(item.unitRate) || 0;
  return round2(qty * rate);
}

// items -> subtotal -> VAT -> grand total
export function calculateTotals(items) {
  const subtotal = round2(
    items.reduce((sum, item) => sum + calculateItemAmount(item), 0)
  );
  const tax = round2(subtotal * TAX_RATE);
  const grandTotal = round2(subtotal + tax);
  return { subtotal, tax, grandTotal };
}

const baht = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = (value) => baht.format(value);

export function formatDate(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}
