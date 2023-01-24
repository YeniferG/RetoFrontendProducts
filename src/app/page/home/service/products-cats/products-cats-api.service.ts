import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../model-interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsCatsApiService {

  private REST_API_SERVER = 'http://localhost:3000/productsCats';

  constructor(public httpClient: HttpClient) {}

  /**
   * GET products from the server
   * @returns Json type Product response data
   */
  getAllProducts(): Observable<Product[]> {
    const url = this.REST_API_SERVER;
    return this.httpClient.get<Product[]>(url).pipe(
      tap((res) => console.log(`fetched Product `, res)),
      catchError(this.handleError<Product[]>('error get products'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
}
