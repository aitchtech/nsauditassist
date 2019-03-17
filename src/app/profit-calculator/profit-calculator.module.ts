import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitCalculatorRoutingModule } from './profit-calculator-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ProfitCalculatorRoutingModule
  ],
  declarations: [HomeComponent]
})
export class ProfitCalculatorModule { }
