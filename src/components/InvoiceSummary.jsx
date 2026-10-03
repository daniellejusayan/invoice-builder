import { formatCurrency } from "../utils/invoice.js";

export default function InvoiceSummary({ totals }) {
  return (
    <div className="avoid-break ml-auto mt-6 w-full max-w-xs text-sm">
      <div className="flex justify-between gap-4 py-1">
        <span className="shrink-0 text-slate-600">Subtotal</span>
        <span className="min-w-0 break-all text-right">
          {formatCurrency(totals.subtotal)}
        </span>
      </div>
      <div className="flex justify-between gap-4 py-1">
        <span className="shrink-0 whitespace-nowrap text-slate-600">VAT (7%)</span>
        <span className="min-w-0 break-all text-right">
          {formatCurrency(totals.tax)}
        </span>
      </div>
      <div className="mt-1 flex justify-between gap-4 border-t-2 border-slate-800 py-2 text-base font-bold">
        <span className="shrink-0 whitespace-nowrap">Grand Total</span>
        <span className="min-w-0 break-all text-right">
          {formatCurrency(totals.grandTotal)}
        </span>
      </div>
    </div>
  );
}
