import { financialFormat } from './index';

describe('Utils functions', () => { 
  it('should correctly format number to currency', () => {
    const num = 2;
    expect(financialFormat(num)).toEqual('2.00 €');
  });
});
