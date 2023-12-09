import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Iproduct } from '../Models/iproduct'
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ProductWithApiService {
//name of service AND it return observable
//lazy=>must be subscripe AND to stop must be unsubscripe
  constructor( private httpclient:HttpClient) { }


getAllProducts():Observable<Iproduct[]> {
return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products`)
}


//get by ID
getProductByID(id:number):Observable<Iproduct>{
return this.httpclient.get<Iproduct>(`${environment.APIBaseURL}/products/${id}`)
}
//                                                             Quere String
searchByprdcategory(name:string):Observable<Iproduct[]> {
return this.httpclient.get<Iproduct[]>(`${environment.APIBaseURL}/products?name=${name}`)
}
}
