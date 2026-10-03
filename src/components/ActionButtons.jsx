export default function ActionButtons({ onPrint, onExportPdf }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={onPrint}
        className="flex-1 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:flex-none"
      >
        Print
      </button>
      <button
        type="button"
        onClick={onExportPdf}
        className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 sm:flex-none"
      >
        Export PDF
      </button>
    </div>
  );
}
