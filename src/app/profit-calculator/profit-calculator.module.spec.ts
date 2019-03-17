import { ProfitCalculatorModule } from './profit-calculator.module';

describe('ProfitCalculatorModule', () => {
  let profitCalculatorModule: ProfitCalculatorModule;

  beforeEach(() => {
    profitCalculatorModule = new ProfitCalculatorModule();
  });

  it('should create an instance', () => {
    expect(profitCalculatorModule).toBeTruthy();
  });
});
