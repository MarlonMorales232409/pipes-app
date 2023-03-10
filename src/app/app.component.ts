import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor( private primeNGConfig:PrimeNGConfig ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primeNGConfig.ripple = true
  }
}
