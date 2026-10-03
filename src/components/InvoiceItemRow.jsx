import Field, { inputClass } from "./Field.jsx";
import { calculateItemAmount, formatCurrency } from "../utils/invoice.js";

// Block characters that are valid in number inputs but not useful for prices
const blockInvalidKeys = (e) => {
  if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
};

export default function InvoiceItemRow({ item, onChange, onDelete }) {
  const handleNumberChange = (field, value) => {
    if (/[eE+-]/.test(value)) return;
    onChange(item.id, field, value);
  };

  return (
    <div className="rounded-md border border-slate-200 p-3">
      <Field label="Description">
        <input
          className={inputClass}
          value={item.description}
          onChange={(e) => onChange(item.id, "description", e.target.value)}
          placeholder="Item or service"
        />
      </Field>

      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 [&>*]:min-w-0">
        <Field label="Quantity">
          <input
            type="number"
            min="0"
            step="any"
            className={inputClass}
            value={item.quantity}
            onKeyDown={blockInvalidKeys}
            onChange={(e) => handleNumberChange("quantity", e.target.value)}
          />
        </Field>
        <Field label="Unit rate (฿)">
          <input
            type="number"
            min="0"
            step="any"
            className={inputClass}
            value={item.unitRate}
            onKeyDown={blockInvalidKeys}
            onChange={(e) => handleNumberChange("unitRate", e.target.value)}
          />
        </Field>
        <div className="col-span-2 sm:col-span-1">
          <span className="mb-1 block text-sm font-medium text-slate-600">Amount</span>
          <div className="break-all rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800">
            {formatCurrency(calculateItemAmount(item))}
          </div>
        </div>
        <div className="col-span-2 flex items-end sm:col-span-1">
          <button
            type="button"
            onClick={() => onDelete(item.id)}
            className="w-full rounded-md border border-red-300 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
