import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Benchmark } from './model/benchmark'
import { BenchmarkEntry } from './model/benchmarkEntry';

const USER_ENTRIES = 'fitmark-user-entries';

@Injectable()
export class BenchmarkService {

  //private benchmarksUrl = 'api/benchmarks'; // url to web api
  private benchmarks: Benchmark[];
  private entries: BenchmarkEntry[];
  private version: number;

  constructor(private http: Http, private storage: AsyncLocalStorage) {
    this.getJSONAsync("assets/data/spec.json").then(data => this.SetData(data));
    this.getUserEntries();
  }

  getBenchmarks(): Observable<Benchmark[]> {
    console.info(JSON.stringify(this.benchmarks));
    return of(this.benchmarks)
  }

  getBenchmark(id: number): Observable<Benchmark> {
    return of(this.benchmarks.find(b => b.id === id))
  }

  getEntries(): Observable<BenchmarkEntry[]>
  {
    return of(this.entries);
  }

  updateBenchmark(benchmark: Benchmark, score: number, modifier: number) {
    if (this.entries === null) {
      this.entries = [];
    }

    let entry: BenchmarkEntry = new BenchmarkEntry(benchmark.id, modifier, score);

    let old = this.entries.find(i => i.benchmarkId === benchmark.id);
    if (old != null) {
      let index = this.entries.indexOf(old);
      this.entries[index] = entry;
    }
    else {
      this.entries.push(entry);
    }

    this.saveUserEntries();
  }

  /* GET benchmarks whose name contains search term */
  searchBenchmarks(term: string): Observable<Benchmark[]> {
    if (!term.trim()) {
      // if not search term, return empty benchmark array.
      return of([]);
    }

    return of(this.benchmarks.filter(h => h.name.includes(term)))
  }

  private getUserEntries() {
    this.storage.getItem(USER_ENTRIES).subscribe((d) => {
      // done
      if (d != null) {
        this.entries = d;
        console.log("loaded saved entries");

        this.entries.forEach(e => {
          let bench = this.benchmarks.find(b => b.id === e.benchmarkId);
          let index = this.benchmarks.indexOf(bench);

          this.benchmarks[index].score = e.score;
          this.benchmarks[index].selectedMod = e.modifier;
        })
      }
      else {
        this.entries = [];
        console.log("nothing to load");
      }
    }, () => {
      // error
      console.log("loading entries is broken");
    })
  }

  private saveUserEntries() {
    this.storage.setItem(USER_ENTRIES, this.entries).subscribe(() => {
      // done
      console.log("saved entries");
    }, () => {
      // error
      console.log("saving entries is broken");
    })
  }

  private getJSONAsync(filepath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(filepath).subscribe(res => {
        if (!res.ok) {
          reject("failed");
        }

        var jsonRes = res.json();

        resolve(jsonRes);
      })
    });
  }

  private SetData(data: any) {
    this.benchmarks = data.benchmarks;
    this.version = data.version;
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
}
