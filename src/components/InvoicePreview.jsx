import InvoiceSummary from "./InvoiceSummary.jsx";
import {
  calculateItemAmount,
  formatCurrency,
  formatDate,
} from "../utils/invoice.js";

export default function InvoicePreview({ previewRef, client, invoice, items, totals }) {
  return (
    <div
      ref={previewRef}
      className="w-full bg-white p-4 text-slate-800 sm:p-10 print:p-0"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-3xl font-bold tracking-wide">INVOICE</h1>
        <div className="text-right text-sm">
          <p>
            <span className="text-slate-500">Invoice No: </span>
            <span className="font-semibold">{invoice.number || "-"}</span>
          </p>
          <p>
            <span className="text-slate-500">Date: </span>
            <span className="font-semibold">{formatDate(invoice.date) || "-"}</span>
          </p>
        </div>
      </div>

      <div className="avoid-break mt-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Bill To
        </p>
        <p className="mt-1 break-words font-semibold">{client.name || "Client name"}</p>
        <p className="mt-1 max-w-sm whitespace-pre-line break-words text-sm text-slate-600">
          {client.address || "Client address"}
        </p>
      </div>

      <table className="mt-8 w-full table-fixed border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b-2 border-slate-800 text-left">
            <th className="w-[36%] py-2 pr-2">Description</th>
            <th className="w-[10%] py-2 text-right">Qty</th>
            <th className="w-[26%] py-2 text-right">Unit Rate</th>
            <th className="w-[28%] py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-slate-200 align-top">
              <td className="whitespace-pre-wrap break-words py-2 pr-2">
                {item.description || "-"}
              </td>
              <td className="break-all py-2 pl-2 text-right">
                {Number(item.quantity) || 0}
              </td>
              <td className="break-all py-2 pl-2 text-right">
                {formatCurrency(Number(item.unitRate) || 0)}
              </td>
              <td className="break-all py-2 pl-2 text-right">
                {formatCurrency(calculateItemAmount(item))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <InvoiceSummary totals={totals} />
    </div>
  );
}
