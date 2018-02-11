import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators';
import { Benchmark } from './model/benchmark'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BenchmarkService {

  private benchmarksUrl = 'api/benchmarks'; // url to web api
  private benchmarks: Benchmark[];
  private version: number;

  constructor(private httpClient: HttpClient, private h: Http) {
    this.getJSONAsync("assets/data/spec.json").then(data => this.SetData(data));
  }

  getBenchmarks(): Observable<Benchmark[]> {

    
    console.info(JSON.stringify(this.benchmarks));
    return of(this.benchmarks)

    //return this.httpClient.get<Benchmark[]>(this.benchmarksUrl)
    //  .pipe(catchError(this.handleError('getBenchmarks', [])));
  }

  getBenchmark(id: number): Observable<Benchmark> {
    return of(this.benchmarks.find(b => b.id === id))
    // const url = `${this.benchmarksUrl}/${id}`;
    // return this.httpClient.get<Benchmark>(url)
    //   .pipe(catchError(this.handleError<Benchmark>(`getBenchmark id=${id}`)));
  }

  updateBenchmark(benchmark: Benchmark): Observable<any> {
    // return this.httpClient.put(this.benchmarksUrl, benchmark, httpOptions)
    //   .pipe(catchError(this.handleError<any>('updateBenchmark')));
    return null
  }

  /* GET benchmarks whose name contains search term */
  searchBenchmarks(term: string): Observable<Benchmark[]> {
    if (!term.trim()) {
      // if not search term, return empty benchmark array.
      return of([]);
    }

    return of(this.benchmarks.filter(h => h.name.includes(term)))

    // return this.httpClient.get<Benchmark[]>(`api/benchmarks/?name=${term}`)
    //   .pipe(catchError(this.handleError<Benchmark[]>('searchBenchmarks', [])));
  }  

  private getJSONAsync(filepath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.h.get(filepath).subscribe(res => {
        if (!res.ok) {
          reject("failed");
        }

        var jsonRes = res.json();

        resolve(jsonRes);
      })
    });
  }

  public SetData(data: any) {
    this.benchmarks = data.benchmarks;
    this.version = data.version;
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
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
