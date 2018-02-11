import { Component, OnInit } from '@angular/core';

import { Benchmark } from '../model/benchmark'
import { BenchmarkService } from '../benchmark.service'
import { BenchmarkEntry } from '../model/benchmarkEntry';

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  benchmarks: Benchmark[];
  //entries: BenchmarkEntry[];

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.getBenchmarks();
    //this.getBenchmarkEntries();
  }

  getBenchmarks(): void {
    this.benchmarkService.getBenchmarks().subscribe(b => this.benchmarks = b);
  }

  // getBenchmarkEntries(): void {
  //   this.benchmarkService.getEntries().subscribe(e => this.entries = e);
  // }
}
