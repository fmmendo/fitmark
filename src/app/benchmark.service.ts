import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { Benchmark, BENCHMARKS } from './benchmark'

@Injectable()
export class BenchmarkService {

  constructor() { }

  getBenchmarks(): Observable<Benchmark[]> {
    return of(BENCHMARKS);
  }

  getBenchmark(id: number): Observable<Benchmark> {
    return of(BENCHMARKS.find(b => b.id === id));
  }
}
