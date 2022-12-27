import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  uppercase: boolean = false
  orderBy:string = ''

  heroes: Heroes[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro
    },
    {
      name: 'Wonder Woman',
      fly: true,
      color: Color.rojo
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.verde
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.rojo
    }
  ]

  setUppercase(){
    this.uppercase = !this.uppercase
  }

  orderByName(){
    this.orderBy = 'name'
  }

  orderByFly(){
    this.orderBy = 'fly'
  }

  orderByColor(){
    this.orderBy = 'color'
  }

}
