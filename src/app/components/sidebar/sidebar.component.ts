import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { Store } from '../../Models/ٍStore';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

trackname: string="Track";
sayhello():string{
  return `hello  ${this.trackname} `;

// one of advantages of interfaceclass
// products:Iproduct[]=[{newProduct},{newProduct},{newProduct}]

}

}
