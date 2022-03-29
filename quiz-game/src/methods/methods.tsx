export const usdFormat = (amount: number | string): string =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
