export const createItem = () => ({
  id: crypto.randomUUID(), // stable key for list rendering
  description: "",
  quantity: "1",
  unitRate: "",
});

export const initialState = {
  client: { name: "", address: "" },
  invoice: {
    number: "INV-001",
    date: new Date().toISOString().slice(0, 10),
  },
  items: [createItem()],
};

export function invoiceReducer(state, action) {
  switch (action.type) {
    case "UPDATE_CLIENT":
      return { ...state, client: { ...state.client, [action.field]: action.value } };

    case "UPDATE_INVOICE":
      return { ...state, invoice: { ...state.invoice, [action.field]: action.value } };

    case "ADD_ITEM":
      return { ...state, items: [createItem(), ...state.items] };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, [action.field]: action.value } : item
        ),
      };

    case "DELETE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };

    default:
      return state;
  }
}
