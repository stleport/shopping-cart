export const financialFormat = n => `${parseFloat(n).toFixed(2).toString()} €`;
export const pluralize = n => ((n > 1) ? 's' : '');
