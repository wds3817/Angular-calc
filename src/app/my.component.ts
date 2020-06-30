import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './my.component.html'
})
export class MyComponent {
   number1:number;
   number2:number;
   number3:number;
   public addNumbers() {
       this.number3 = +this.number1 + +this.number2; 
       //this.number3 = +this.number1 + +this.number3;   
   }
   public minusNumbers() {
       this.number3 = +this.number1 - +this.number2;
   }
   public multiplyNumbers() {
       this.number3 = +this.number1 * +this.number2;
   }
   public divideNumbers() {
       this.number3 = +this.number1 / +this.number2;
   }
//    constructor () {
//        this.addNumbers();
//    }
}
