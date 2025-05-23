export type CheckoutFormDataPropTypes = {
  code: string;
  address: string;
  number: string;
  complement?: string;
  address2: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
};
