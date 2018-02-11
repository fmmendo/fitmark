import { Component, OnInit } from '@angular/core';
import { Benchmark } from '../model/benchmark';
import { BenchmarkService } from '../benchmark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  benchmarks: Benchmark[] = [];

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.getBenchmarks();
  }

  getBenchmarks(): void {
    this.benchmarkService.getBenchmarks().subscribe(b => this.benchmarks = b.slice(1, 5));
  }
}
