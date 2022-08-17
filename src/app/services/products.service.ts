import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  /**
   * @description get example products data from https://fakestoreapi.com/. Limit of 10 products
   * output:
   * @param {string} Product[] - some example products
   **/
  getProducts(): Observable<Product[]> {
    console.log("getting products")
    // for demo purpose limit it to 15 elements    
    return this.httpClient.get<Product[]>(environment.BACKEND_URL + "/products")
  }

  /**
   * @description get a single product by id
   * inputs:
   * @param {string} id - Id of product
   * output:
   * @param {string} product - the product to be shown
   **/
  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.BACKEND_URL}/products/${id}`)
  }
}
