import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent {
listFilter: string="";
cart:Iproduct[] = [];
//newPrdInCart this obj that happen when it fire

addNew(newPrdInCart:Iproduct){







  const foundingProduct = this.cart.find(prd => prd.id == newPrdInCart.id);

  if (foundingProduct) {
    foundingProduct.count++;
  } else {

    this.cart.push(newPrdInCart);
  }



}
delete1(product:Iproduct){
  product.count = 0
  product.name=""
  product.price = 0
  product.quantity = 0



}
}

