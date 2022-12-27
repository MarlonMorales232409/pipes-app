import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  name  = 'Marlon'
  genre = 'male'

  mapping = {
    'male'  : 'invitarlo',
    'female': 'invitarla',
  }

 
  nameList = ['Marlon', 'Lilianet', 'Liliabet']

  superHeros = [
    {
      name: 'Super-Man',
      fly: true
    },
    {
      name: 'Batman',
      fly: false,
    },
    {
      name: 'Cat-Woman',
      fly: false
    }
  ]

  mappingPlural = {
    '=0' : 'no tenemos clientes esperando',
    '=1' : 'tenemos 1 cliente esperando',
    'other' : 'tenemos # clientes esperando',
  }

  user:any = {
    name: 'Marlon Morales',
    address: 'Blanes, España',
    edad: 24
  }

  cambiarPersona(){
    this.name = this.name === 'Marlon' ? 'Lilianet' : 'Marlon'
    this.genre = this.name === 'Marlon' ? 'male' : 'female'
  }

  borrarCliente(){
    this.nameList.pop()
  }

  myObservable = interval(2000);

  myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos la data de la promesa')
    }, 3000);
  })

}
