import { Component, OnInit, Input } from '@angular/core';
import { Benchmark } from '../benchmark';

@Component({
  selector: 'app-benchmark-detail',
  templateUrl: './benchmark-detail.component.html',
  styleUrls: ['./benchmark-detail.component.css']
})
export class BenchmarkDetailComponent implements OnInit {

  @Input() benchmark: Benchmark;

  constructor() { }

  ngOnInit() {
  }

}
