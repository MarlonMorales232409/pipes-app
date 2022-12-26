import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'marlOn morAles'
  number:number = 1000
  obj = {name: 'Marlon', currentBalance: 1000}

  printValue(){
    console.log({
      name: this.name,
      number: this.number,
      data: this.obj
    })
  }
}
