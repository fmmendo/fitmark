import { Component, OnInit } from '@angular/core';
import { Benchmark } from '../benchmark'
import { BenchmarkService } from '../benchmark.service'

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  benchmarks: Benchmark[];
  selectedBenchmark: Benchmark;

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.getBenchmarks();
  }

  onSelect(benchmark: Benchmark): void {
    this.selectedBenchmark = benchmark;
  }

  getBenchmarks(): void {
    this.benchmarkService.getBenchmarks().subscribe(b => this.benchmarks = b);
  }
}
