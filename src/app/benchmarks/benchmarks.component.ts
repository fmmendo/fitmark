import { Component, OnInit } from '@angular/core';

import { Benchmark } from '../model/benchmark'
import { BenchmarkService } from '../benchmark.service'

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  benchmarks: Benchmark[];

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.getBenchmarks();
  }

  getBenchmarks(): void {
    this.benchmarkService.getBenchmarks().subscribe(b => this.benchmarks = b);
  }
}
