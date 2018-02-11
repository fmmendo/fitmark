import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Benchmark } from '../model/benchmark';
import { BenchmarkService } from '../benchmark.service';

@Component({
  selector: 'app-benchmark-search',
  templateUrl: './benchmark-search.component.html',
  styleUrls: [ './benchmark-search.component.css' ]
})
export class BenchmarkSearchComponent implements OnInit {
  benchmarks$: Observable<Benchmark[]>;
  private searchTerms = new Subject<string>();

  constructor(private benchmarkService: BenchmarkService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.benchmarks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.benchmarkService.searchBenchmarks(term)),
    );
  }
}