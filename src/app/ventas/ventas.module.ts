import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    // ? Components
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,

    // ? Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
    ColorPipe,
  ],
  imports: [
    CommonModule,
    PrimeModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
