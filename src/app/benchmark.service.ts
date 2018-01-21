import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators';
import { Benchmark, BENCHMARKS } from './benchmark'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BenchmarkService {

  private benchmarksUrl = 'api/benchmarks'; // url to web api

  constructor(private http: HttpClient) { }

  getBenchmarks(): Observable<Benchmark[]> {
    return this.http.get<Benchmark[]>(this.benchmarksUrl)
      .pipe(catchError(this.handleError('getBenchmarks', [])));
  }

  getBenchmark(id: number): Observable<Benchmark> {
    const url = `${this.benchmarksUrl}/${id}`;
    return this.http.get<Benchmark>(url)
      .pipe(catchError(this.handleError<Benchmark>(`getBenchmark id=${id}`)));
  }

  updateBenchmark(benchmark: Benchmark): Observable<any> {
    return this.http.put(this.benchmarksUrl, benchmark, httpOptions)
      .pipe(catchError(this.handleError<any>('updateBenchmark')));
  }

  /* GET benchmarks whose name contains search term */
  searchBenchmarks(term: string): Observable<Benchmark[]> {
    if (!term.trim()) {
      // if not search term, return empty benchmark array.
      return of([]);
    }
    return this.http.get<Benchmark[]>(`api/benchmarks/?name=${term}`)
      .pipe(catchError(this.handleError<Benchmark[]>('searchBenchmarks', [])));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
