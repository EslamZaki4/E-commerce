import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';


@Injectable({
  providedIn: 'root'//it means => i can use mysevice in anywhere in myApp
})
export class ProductsService {
  productList: Iproduct[] = [];
  constructor() {
    this.productList = [
      { id: 1, name: "Adidas", quantity: 2, price: 121, img: "https://assets.adidas.com/images/w_940,f_auto,q_auto/c2a1185abf72471aaab9af37017a20d2_9366/HP6117_05_standard.jpg", categoryId: 2011,count: 1,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.` },
      { id: 2, name: "Adidas", quantity: 3, price: 122, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/34b3957415a04e47bbad4521799b918d_9366/IE2006_01_standard.jpg", categoryId: 2011,count: 1,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`  },
      { id: 3, name: "Nike", quantity: 5, price: 144, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ac03f257b92247e09bc1af41014908d8_9366/HP5885_02_standard_hover.jpg", categoryId: 2011 ,count: 1,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.` },
      { id: 4, name: "Nike", quantity: 10, price: 150, img: "https://www.sneakercage.gr/image/cache/catalog/products/12/05/01/01/120501010412-17-940x940.jpg", categoryId: 2011,count: 1  ,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`},
      { id: 5, name: "New Balance", quantity: 6, price: 160, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/47076d2aa45248b087d8af50011d7ccd_9366/ID6791_04_standard.jpg", categoryId: 2012 ,count: 1,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.` },
      { id: 6, name: "New Balance", quantity: 8, price: 111, img: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/d5c5843062074c529f8caf4100ddd018_9366/HQ4080_04_standard.jpg", categoryId: 2015,count: 1 ,details:` Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.` },

    ];
  }
//to use must be inject
   //get All Products
getAllProducts():Iproduct[] {
return this.productList

  }

//filter by Price
filterfunc1(Pricefilter: string):Iproduct[] {
 return this.productList.filter((product: Iproduct) =>product.price.toString() == Pricefilter);

   }
//i want when i navigate getproducts to show it in details
//getProductByID=>when he find obj or not(undefined)  endUser missUse          UNION

getProdByID(productID: number):Iproduct|undefined {
return this.productList.find(prd=>prd.id == productID)

}





//pagination
getProductIDList():number[] {
return this.productList.map((prd) =>prd.id)
}

}
