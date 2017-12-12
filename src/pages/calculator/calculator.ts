import { Component } from '@angular/core'; import { IonicPage } from 'ionic-angular';
@IonicPage() @Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html' })
export class CalculatorPage {
  height: number;
  weight: number;
  final_bmi: number;

  constructor() {}
  calculateBMI() {
    this.final_bmi = this.weight / (this.height / 100 * this.height / 100);
    console.log(this.final_bmi);
  }
}
