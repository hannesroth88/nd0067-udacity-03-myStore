import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  /**
   * @description get example products data from https://fakestoreapi.com/. Limit of 10 products
   * @constructor
   * output:
   * @param {string} products - some example products
   **/
  getProducts(): Observable<Product[]> {
    console.log("getting products")
    return this.httpClient.get<Product[]>("https://fakestoreapi.com//products?limit=15")
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>("https://fakestoreapi.com//products/" + id)
  }
}
