import generateUID from "./helpers/generateUID";

const formTemplate = {
  id: generateUID(),
  status: "Pending",
  currency: "USD",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  invoiceDate: "",
  paymentDue: "",
  description: "",
  items: [],
};

export default formTemplate;
