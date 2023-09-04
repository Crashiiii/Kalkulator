import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  evaluateExpression(expression: string): string {
    return eval(expression).toString();
  }
}
