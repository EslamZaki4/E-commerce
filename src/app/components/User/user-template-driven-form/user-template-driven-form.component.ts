import { Component } from '@angular/core';
import { ProductWithApiService } from 'src/app/Services/product-with-api.service';
import { Router } from '@angular/router';
import { Iproduct } from '../../../Models/iproduct';
import { UserIService } from 'src/app/Services/user-i.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})
export class UserTemplateDrivenFormComponent {
product:Iproduct={} as Iproduct;
isEditing:boolean = false;



  constructor(private api: UserIService,
    private productApiService: ProductWithApiService,
    private router: Router,
    private route: ActivatedRoute) {

  const prdId = this.route.snapshot.paramMap.get('id');//capture

  if (prdId) {
    this.isEditing = true;
    this.productApiService.getProductByID(Number(prdId)).subscribe(
      (data: Iproduct) => {
        this.product = data; // Assign received data to 'product'
      },
      (error) => {
        console.error(error); // Handle any potential errors here
      }
    );
  }
}
addOrUpdate() {
  if (this.isEditing) {
    this.updateProduct();
  } else {
    this.addNew();
  }
}


  addNew() {

  //  let product1: Iproduct = {
  //     id: 1,
  //     name: 'Sample Product',
  //     quantity: 10,
  //     price: 100,
  //     img: 'sample.jpg',
  //     categoryId: 1,
  //     count: 0,
  //     details: 'Sample details'
  //   };


    this.api.postprd(this.product).subscribe({
      next: (product12) => {
        console.log(product12);
        // this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  updateProduct() {
    this.api.updatePrd(this.product).subscribe(
      (updatedProduct) => {
        console.log(updatedProduct);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error(error);
      }
    );
  }



  delPrd() {
    const confirmed = window.confirm('Are you sure to delete product  ?');

    if (confirmed) {
      this.api.delPrd( this.product).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error(error);
        }
      );
    }}


  }

