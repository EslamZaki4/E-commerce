import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  // productList: Iproduct[] = [];
  flag: boolean = false;
  clientName: string = "1234567891234567";

  productListFilter: Iproduct[] = [];
  //docerator
  //when it fire i recept obj and gave you this obj
  @Output() onaddNewPrd = new EventEmitter<Iproduct>;
  myDate: Date = new Date();





  set listFilter(value: string) {
    this.productListFilter = this.prdService.filterfunc1(value);
  }

  @Input() set listFilterChild(value: string) {
    this.productListFilter = this.prdService.filterfunc1(value);
  }


  //instance from class ProductService
  //it call such as static class
  constructor(public prdService: ProductsService, private router: Router,
    private prdWithApiServise: ProductWithApiService) {

  //                                       //  in success
    this.prdWithApiServise.getAllProducts().subscribe(
      {
        next: (data) => {
   this.productListFilter=data;


        },
        error: (err) => {
          console.log(err);

        }
      }
    )


  }
  //case Success[next]by default
  //complete



  buy(product: Iproduct) {
    if (product.quantity > 0) {

      product.quantity -= 1;
    }
    this.flag = true;
  }
  // i passed one object and i recept one object

  //1-DECLARE event
  //2-fire
  //event Subscriper


  //when it recept obj of product
  //when fire emit value(product)
  AddToCart(val: Iproduct) {
    this.onaddNewPrd.emit(val)

  }


  //ngOnit to take copy
  ngOnInit(): void {
    // this.productListFilter =Array.from(this.productList);
    this.productListFilter = Array.from(this.prdService.getAllProducts());
  }

  // filterFunc(IDfilter: string): Iproduct[] {
  //   return this.productList.filter((product: Iproduct) => product.id.toString() == IDfilter);
  // }

  // filterfunc1(Pricefilter: string):Iproduct[] {
  // return this.productList.filter((product: Iproduct) =>product.price.toString() == Pricefilter);

  // }



  prodDetails(productID: number) {
    // this.router.navigate([`/productDetails/:${productID}`]);
    this.router.navigate(['/productDetails', productID]);
  }


  searchWithCategory(search:any){
this.prdWithApiServise.searchByprdcategory(search).subscribe(
{
next:(data)=>{
console.log(data);

  this.productListFilter=data;

}, error:(err)=>{
console.log(err)
}
  })
  }




}
