import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) {}

  payWithCoinbase(order: Order):Observable<any> {
    return this.httpClient.post(`${environment.BACKEND_URL}/payment/coinbase`,order)
  }
  
}
