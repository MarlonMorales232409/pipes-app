import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
  
  transform(value: string, isUppercase: boolean = true):string {
    return isUppercase ? value.toUpperCase() : value.toLocaleLowerCase()  
  }
}