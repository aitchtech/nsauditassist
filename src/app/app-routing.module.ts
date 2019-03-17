import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator/profit',
    pathMatch: 'full'
  },
  {
    path: 'calculator/profit',
    loadChildren: './profit-calculator/profit-calculator.module#ProfitCalculatorModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
