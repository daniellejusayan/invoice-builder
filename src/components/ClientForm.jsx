import Field, { inputClass } from "./Field.jsx";

export default function ClientForm({ client, onChange }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-slate-700">Client Details</h2>
      <div className="space-y-3">
        <Field label="Client name">
          <input
            className={inputClass}
            value={client.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="e.g. Acme Co., Ltd."
          />
        </Field>
        <Field label="Client address">
          <textarea
            rows={3}
            className={inputClass}
            value={client.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="Street, district, province, postal code"
          />
        </Field>
      </div>
    </div>
  );
}
