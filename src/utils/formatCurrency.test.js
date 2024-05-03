import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('should format the amount with the default currency', () => {
    const amount = 1000;
    const expected = 'EUR 1.000,00\xa0€';
    const result = formatCurrency(amount);
    expect(result).toEqual(expected);
  });

  it('should format the amount with the specified currency', () => {
    const amount = 1000;
    const currency = 'USD';
    const expected = 'USD 1.000,00\xa0$';
    const result = formatCurrency(amount, currency);
    expect(result).toEqual(expected);
  });

  it('should handle negative amounts', () => {
    const amount = -1000;
    const expected = 'EUR -1.000,00\xa0€';
    const result = formatCurrency(amount);
    expect(result).toEqual(expected);
  });

  it('should handle zero amount', () => {
    const amount = 0;
    const expected = 'EUR 0,00\xa0€';
    const result = formatCurrency(amount);
    expect(result).toEqual(expected);
  });

  it('should handle empty amount', () => {
    const amount = '';
    const expected = 'EUR 0,00\xa0€';
    const result = formatCurrency(amount);
    expect(result).toEqual(expected);
  });
});
