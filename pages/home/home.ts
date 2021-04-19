import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  h: number;
  w: number;
  bmi: number;
  m: string;

  constructor(public navCtrl: NavController) {

  }

  calculateBMI() {
    this.bmi = this.w / (this.h * this.h);
    this.bmi = parseFloat (this.bmi.toFixed(2));

    if (this.bmi <18.5) {
      this.m = "Underweight";
    } else if (this.bmi > 18.5 && this.bmi < 25) {
      this.m = "Normal";
    } else if (this.bmi > 25 && this.bmi < 30) {
      this.m = "Overweight";
    } else {
      this.m = "Obese";
    }

  }

}
