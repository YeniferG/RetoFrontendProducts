import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../model-interface/product';
import { ProductInfo } from '../model-interface/product-info';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private allProductsURL = 'api/products';

  private PRODUCTS_URL = 'api/product';

  listProductInfo: ProductInfo[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpGetOptions = {
    params: {
      page: 0,
      size: 200,
    },
  };
  constructor(private http: HttpClient) {}

  /** GET cards from the server */
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.allProductsURL, this.httpGetOptions)
      .pipe(
        tap((res) => console.log('Successful', res)),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  /** GET cards from the server */
  getProductsById(id: string): Observable<Product> {
    const url = `${this.PRODUCTS_URL}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap((res) => console.log('Successful', res)),
      catchError(
        this.handleError<Product>('Erro in service of api getProducts')
      )
    );
  }

  updateProduct(id: string, product: Product): Observable<Object> {
    const url = `${this.PRODUCTS_URL}/${id}`;
    return this.http.put(url, product, this.httpOptions).pipe(
      tap((_) => console.log(`Updated Product ${product.name}`)),
      catchError(this.handleError<Object>('updateProduct'))
    );
  }

  addProduct(product: Product): Observable<Object> {
    const url = `${this.PRODUCTS_URL}`;
    return this.http.post(url, product, this.httpOptions).pipe(
      tap((_) => console.log(`Added product with id ${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  deleteProduct(id: string): Observable<Object> {
    const url = `${this.PRODUCTS_URL}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((res) => console.log('Successful', res)),
      catchError(this.handleError<Object>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getQuantityById(id: string) {
    return this.listProductInfo
      .filter((list) => {
        return list.idProduct == id;
      })
      .map((filteredList) => filteredList.quantity).at(0);
  }
}
