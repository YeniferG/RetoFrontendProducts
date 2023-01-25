import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Buy } from '../model-interface/buy';

@Injectable({
  providedIn: 'root'
})
export class BuysApiService {
  private	saveBuyURL = "api/buy";
  private	getBuysURL = "api/buys";

  httpOptions = {
		headers: new HttpHeaders({ "Content-Type": "application/json" }),
	};
  
constructor(private http: HttpClient,) { }

/** POST: create the Buy on the server */
saveBuy(buy: Buy): Observable<any> {
  const url = `${this.saveBuyURL}`;
  return this.http.post(url, buy, this.httpOptions).pipe(
    tap((res) => console.log("Successful", res)),
    catchError(this.handleError<any>("saveBuy")),
  );
}

getBuys(): Observable<Buy[]> {
  return this.http.get<Buy[]>(this.getBuysURL, this.httpOptions).pipe(
    tap((res) => console.log("Successful", res)),
    catchError(this.handleError<Buy[]>("getBuys", [])),
  );
}

/**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
