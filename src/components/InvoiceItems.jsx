import InvoiceItemRow from "./InvoiceItemRow.jsx";

export default function InvoiceItems({ items, onAdd, onChange, onDelete }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-700">Line Items</h2>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
        >
          + Add item
        </button>
      </div>

      {items.length === 0 && (
        <p className="py-4 text-center text-sm text-slate-500">
          No items yet. Click “Add item” to start.
        </p>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <InvoiceItemRow
            key={item.id}
            item={item}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
