import { Component, OnInit } from '@angular/core';
import { Benchmark } from '../benchmark'

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  benchmark: Benchmark = {
    id: 1,
    name: 'Pull-Ups',
    level: 'level 4'
  }

  constructor() { }

  ngOnInit() {
  }

}
