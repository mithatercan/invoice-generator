const initialData = [
  {
    id: "UX001",
    status: "Pending",
    currency: "USD",
    senderAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "52000",
      country: "Georgia",
    },
    clientAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "5200",
      country: "Turkey",
    },
    clientName: "Mithat Ercan",
    clientEmail: "test@test.com",
    invoiceDate: "2022-01-01",
    paymentDue: "2022-01-01",
    description: "Web Development",
    items: [
      {
        id: "213HSQK",
        name: "Website",
        quantity: 1,
        price: 3000,
      },
      {
        id: "123AJKSHD",
        name: "Mockup",
        quantity: 1,
        price: 1000,
      },
    ],
  },
  {
    id: "UX002",
    status: "Draft",
    currency: "GBP",
    senderAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "52000",
      country: "Georgia",
    },
    clientAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "5200",
      country: "Turkey",
    },
    clientName: "Serhat Ercan",
    clientEmail: "test@test.com",
    invoiceDate: "2022-01-01",
    paymentDue: "2022-01-01",
    description: "Shopping",
    items: [
      {
        id: "1123LKHJ",
        name: "Mackbook Pro",
        quantity: 1,
        price: 300000,
      },
      {
        id: "2ALK23NL",
        name: "Airpods Pro 2",
        quantity: 3,
        price: 500,
      },
    ],
  },
  {
    id: "UX003",
    status: "Paid",
    currency: "GBP",
    senderAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "52000",
      country: "Georgia",
    },
    clientAddress: {
      street: "123 Main St",
      city: "Tbilisi",
      postCode: "5200",
      country: "Turkey",
    },
    clientName: "Mithat Ercan",
    clientEmail: "test@test.com",
    invoiceDate: "2022-01-01",
    paymentDue: "2022-01-01",
    description: "Software Development",
    items: [
      {
        id: "1231HLK",
        name: "Desktop App",
        quantity: 1,
        price: 300000,
      },
    ],
  },
];

export default initialData;
