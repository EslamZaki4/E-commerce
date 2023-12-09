import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

productId:number=0;
product:Iproduct|undefined=undefined;
//pagination
productIDSList:number[] =[];
currentProductIndex:number=0;
//inject
//it give me value that in URL[ActivatedRoute]
constructor(private prdService:ProductsService
  ,private activatedRoute: ActivatedRoute ,
  private router:Router,
private productWithApiService:ProductWithApiService

  ) {}

  ngOnInit(): void {

//     this.productId=(this.activatedRoute.snapshot.paramMap.get('id'))?Number(this.activatedRoute.snapshot.paramMap.get('id')):0;
//  console.log(this.productId);

// this.product=this.prdService.getProductByID(this.productId);
// console.log(this.product);

//  {id: 1,
// name: 'Adidas'
// , quantity: 2,
//  price: 121,
//   img: 'https://assets.adidas.com/images/w_940,f_auto,q_au…2471aaab9af37017a20d2_9366/HP6117_05_standard.jpg', …
//    }

//=======================================>>>>>><<<<<<================================


this.activatedRoute.paramMap.subscribe(param=>{

                      // take id from URL
  this.productId=(param.get('id'))?Number(param.get('id')):0;

let foundPrd=this.prdService.getProdByID(this.productId);
if(foundPrd){
this.product=foundPrd
}
else{
  alert("Product not found");
  }
  }
    )
//=======================================>>>>>><<<<<<================================
//[GET] from Api
//lazy
//here success by default
//oneProduct
this.productWithApiService.getProductByID(this.productId).subscribe(data=>{
this.product=data
// console.log(this.product);
}
  )

  this.productIDSList=this.prdService.getProductIDList();

  }
//   console.log(this.productIDSList);

goBackFunc(){
this.router.navigate(['/products']);

}

prevFunc(){
//                                                        in url
this.currentProductIndex = this.productIDSList.indexOf(this.productId);
console.log(this.currentProductIndex);

this.router.navigate(['/productDetails',this.productIDSList[--this.currentProductIndex]])


}

nextFunc(){
  this.currentProductIndex = this.productIDSList.indexOf(this.productId);
  console.log(this.currentProductIndex);

  this.router.navigate(['/productDetails',this.productIDSList[++this.currentProductIndex]]);
}



// observable  it    (id)تراقب ال
}

