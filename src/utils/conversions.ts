export const formatCurrency = (value: number) => {
  const formattedValue = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return {
    formattedValue,
    currency: "R$",
  };
};

export const formatCurrencyDefault = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
