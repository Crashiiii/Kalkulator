import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  Calculated: string = '';

  constructor(private calculatorService: CalculatorService) { }

  toCalculate(value: string) {
    this.Calculated += value;
  }

  clearCalculate() {
    this.Calculated = '';
  }

  calculatePrecent(value: string) {
    this.Calculated += value;
    this.Calculated = this.calculatorService.evaluateExpression(this.Calculated);
  }

  calculatePower(value: string) {
    const number = parseFloat(this.Calculated);
    const result = Math.pow(number, 2);
    this.Calculated = result.toString();
  }

  calculateSqrt(value: string) {
    this.Calculated = 'Math.sqrt(' + this.Calculated + ')';
    this.Calculated = this.calculatorService.evaluateExpression(this.Calculated);
  }
  calculateBack() {
    this.Calculated = this.Calculated.slice(0, -1);
  }

  calculateSign() {
    const number = parseFloat(this.Calculated);
    this.Calculated = (-number).toString();
  }
  calculatedivide() {
    const number = parseFloat(this.Calculated);
    this.Calculated = (1 / number).toString();
  }
  calculateEntry() {
    this.Calculated = this.Calculated.slice(0, -1);
  }

  calculate() {
    try {
      this.Calculated = this.calculatorService.evaluateExpression(this.Calculated);
    } catch (error) {
      this.Calculated = 'Błędne obliczenie';
    }
  }

}
