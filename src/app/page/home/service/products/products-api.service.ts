import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../model-interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private	listProductsURL = "api/products";

	httpOptions = {
		headers: new HttpHeaders({ "Content-Type": "application/json" }),
	};
  
  httpGetOptions = {
    params:{
			page: 0,
			size: 5,
		}
  }
  constructor(
    private http: HttpClient,
  ) { }

  /** GET cards from the server */
	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.listProductsURL, this.httpGetOptions).pipe(
			tap((res) => console.log("Successful", res)),
			catchError(this.handleError<Product[]>("getProducts", [])),
		);
	}

  private handleError<T>(operation = "operation", result?: T) {
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
