# Invoice Builder

A responsive React invoice builder for creating professional invoices directly in the browser. Add client information, invoice details, and line items while the preview updates automatically. Invoices can be printed or exported as clean PDF documents.

## Features

- Responsive invoice editor and live preview
- Client and invoice information forms
- Dynamic line items with quantity and unit-rate fields
- Automatic subtotal, 7% VAT, and grand-total calculations
- Thai Baht currency formatting
- Input protection for invalid number characters
- Mobile-friendly wrapping for long descriptions and amounts
- Print-friendly layout
- PDF export powered by `html2pdf.js`

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- html2pdf.js

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Usage

1. Enter the client name and address.
2. Add the invoice number and date.
3. Add or remove invoice items.
4. Enter quantities and unit rates.
5. Review the calculated subtotal, VAT, and grand total.
6. Select **Print** to print the invoice or **Export PDF** to download it.

## Project Structure

```text
src/
├── components/
│   ├── ActionButtons.jsx
│   ├── ClientForm.jsx
│   ├── InvoiceBuilder.jsx
│   ├── InvoiceInfoForm.jsx
│   ├── InvoiceItemRow.jsx
│   ├── InvoiceItems.jsx
│   ├── InvoicePreview.jsx
│   └── InvoiceSummary.jsx
├── invoiceReducer.js
├── main.jsx
└── utils/
    └── invoice.js
```

## License

This project is private and does not currently specify an open-source license.
