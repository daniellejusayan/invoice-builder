import Field, { inputClass } from "./Field.jsx";

export default function InvoiceInfoForm({ invoice, onChange }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-slate-700">Invoice Details</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Invoice number">
          <input
            className={inputClass}
            value={invoice.number}
            onChange={(e) => onChange("number", e.target.value)}
          />
        </Field>
        <Field label="Invoice date">
          <input
            type="date"
            className={inputClass}
            value={invoice.date}
            onChange={(e) => onChange("date", e.target.value)}
          />
        </Field>
      </div>
    </div>
  );
}
