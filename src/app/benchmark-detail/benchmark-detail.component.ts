import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Benchmark } from '../benchmark';
import { BenchmarkService } from '../benchmark.service';

@Component({
  selector: 'app-benchmark-detail',
  templateUrl: './benchmark-detail.component.html',
  styleUrls: ['./benchmark-detail.component.css']
})
export class BenchmarkDetailComponent implements OnInit {
  
  @Input() benchmark: Benchmark;

  constructor(private route: ActivatedRoute, private benchmarkService: BenchmarkService, private location: Location) { }

  ngOnInit() {
    this.getBenchmark();
  }

  getBenchmark(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.benchmarkService.getBenchmark(id).subscribe(b => this.benchmark = b);
  }

  goBack(): void{
    this.location.back();
  }
}
