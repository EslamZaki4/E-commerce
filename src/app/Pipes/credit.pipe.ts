import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(value:String): String {

value=value.replace(/\D/g, '');

 let slice=value.match(/(\d{4})/g);

if(slice!=null) {
    return slice.join(' - ');
  }else{
    return "";
  }

}
}
