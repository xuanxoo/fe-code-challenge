const formatCurrency = (amount = 0, currency = 'EUR') => {
  const amountWitCurrency = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
  return `${currency} ${amountWitCurrency}`;
};

export { formatCurrency };
