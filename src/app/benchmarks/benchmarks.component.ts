import { Component, OnInit } from '@angular/core';

import { Benchmark } from '../model/benchmark'
import { BenchmarkService } from '../benchmark.service'
import { BenchmarkEntry } from '../model/benchmarkEntry';
import { UserData } from '../model/userData';
import { Category } from '../model/Category';
import { BenchmarkView } from '../model/benchmarkView';
import { Observable } from 'rxjs/Observable';


import { zip } from 'rxjs/observable/zip'

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  private Category = Category;

  userData: UserData;
  benchmarks: BenchmarkView[];

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.load();
  }

  load(): void {
    let benchmarks: Benchmark[];
    let entries: BenchmarkEntry[];

    zip(
      this.benchmarkService.getUserData(),
      this.benchmarkService.getBenchmarks(),
      this.benchmarkService.getEntries()
    ).subscribe(([u, b, e]) => {
      benchmarks = b;
      entries = e;

      this.userData = u;
      this.benchmarks = new Array<BenchmarkView>();
      benchmarks.forEach(bench => {
        let entry = entries.find(b => b.benchmarkId === bench.id);
        this.benchmarks.push(new BenchmarkView(bench, entry))
      })
    });

  }

}
