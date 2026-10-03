import { useReducer, useRef } from "react";
import html2pdf from "html2pdf.js";
import { invoiceReducer, initialState } from "../invoiceReducer.js";
import { calculateTotals } from "../utils/invoice.js";
import ClientForm from "./ClientForm.jsx";
import InvoiceInfoForm from "./InvoiceInfoForm.jsx";
import InvoiceItems from "./InvoiceItems.jsx";
import InvoicePreview from "./InvoicePreview.jsx";
import ActionButtons from "./ActionButtons.jsx";

export default function InvoiceBuilder() {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);
  const previewRef = useRef(null); // points at the invoice DOM node for PDF export

  // Derived values: calculated on every render, never stored in state
  const totals = calculateTotals(state.items);

  // Callback props passed to children
  const handleClientChange = (field, value) =>
    dispatch({ type: "UPDATE_CLIENT", field, value });
  const handleInvoiceChange = (field, value) =>
    dispatch({ type: "UPDATE_INVOICE", field, value });
  const handleAddItem = () => dispatch({ type: "ADD_ITEM" });
  const handleItemChange = (id, field, value) =>
    dispatch({ type: "UPDATE_ITEM", id, field, value });
  const handleDeleteItem = (id) => dispatch({ type: "DELETE_ITEM", id });

  const handlePrint = () => window.print();

  const handleExportPdf = () => {
    const filename = `${state.invoice.number || "invoice"}.pdf`;
    html2pdf()
      .set({
        margin: 10,
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, windowWidth: 794 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"], avoid: ["tr", ".avoid-break"] },
      })
      .from(previewRef.current)
      .save();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm print:hidden">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-800">Invoice Builder</h1>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-2 print:block print:p-0">
        {/* Editor (hidden when printing) */}
        <section className="space-y-6 print:hidden">
          <ClientForm client={state.client} onChange={handleClientChange} />
          <InvoiceInfoForm invoice={state.invoice} onChange={handleInvoiceChange} />
          <InvoiceItems
            items={state.items}
            onAdd={handleAddItem}
            onChange={handleItemChange}
            onDelete={handleDeleteItem}
          />
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-slate-700 print:hidden">
            Preview
          </h2>

          <div className="rounded-lg bg-white shadow print:shadow-none">
            <InvoicePreview
              previewRef={previewRef}
              client={state.client}
              invoice={state.invoice}
              items={state.items}
              totals={totals}
            />

            <div className="flex justify-end border-t border-slate-200 px-4 py-4 print:hidden">
              <ActionButtons onPrint={handlePrint} onExportPdf={handleExportPdf} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
