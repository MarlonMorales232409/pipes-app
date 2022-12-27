import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(arr: Heroes[], orderBy: string = ''): Heroes[] {

    switch (orderBy) {
      case 'name':
        return arr.sort( ( a,b )=> (a.name > b.name) ? 1 : -1);
      
      case 'fly':
        return arr.sort( ( a,b )=> (a.fly > b.fly) ? -1 : 1);

      case 'color':
        return arr.sort( ( a,b )=> (a.color > b.color) ? 1 : -1);

      default:
        return arr
    }

  }

}
