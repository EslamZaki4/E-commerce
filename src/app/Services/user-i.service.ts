import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../Models/iuser';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class UserIService {
  constructor(private httpClient: HttpClient) {}

  http1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postprd(newprd: Iproduct): Observable<Iuser> {
    return this.httpClient.post<Iuser>(`${environment.APIBaseURL}/products`, newprd, this.http1);
  }


  updatePrd(newprd:Iproduct):Observable<Iuser[]>{
    return this.httpClient.patch<Iuser[]>(`${environment.APIBaseURL}/products/${newprd.id}` , JSON.stringify(newprd) , this.http1)
  }

  delPrd(newprd:Iproduct):Observable<Iuser[]>{
    return this.httpClient.delete<Iuser[]>(`${environment.APIBaseURL}/products/${newprd.id}`)
  }

}
