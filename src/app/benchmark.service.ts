import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/Observable/of'
import { Benchmark, BENCHMARKS } from './benchmark'

@Injectable()
export class BenchmarkService {

  constructor() { }

  getBenchmarks(): Observable<Benchmark[]> {
    return of(BENCHMARKS);
  }
}
