import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Benchmark } from '../model/benchmark';
import { BenchmarkService } from '../benchmark.service';
import { BenchmarkEntry } from '../model/benchmarkEntry';
import { BenchmarkView } from '../model/benchmarkView';

import { zip } from 'rxjs/observable/zip'

@Component({
  selector: 'app-benchmark-detail',
  templateUrl: './benchmark-detail.component.html',
  styleUrls: ['./benchmark-detail.component.css']
})
export class BenchmarkDetailComponent implements OnInit {

  @Input() benchmark: BenchmarkView;

  constructor(private route: ActivatedRoute, private benchmarkService: BenchmarkService, private location: Location) { }

  ngOnInit() {
    this.getBenchmark();
  }

  getBenchmark(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    zip(
      this.benchmarkService.getBenchmark(id),
      this.benchmarkService.getEntry(id)
    ).subscribe(([b, e]) => {
      this.benchmark = new BenchmarkView(b, e);
    });
  }

  save(): void {
    this.benchmarkService.updateBenchmark(this.benchmark.id,
                                          this.benchmark.score,
                                          this.benchmark.selectedModifier,
                                          this.benchmark.trainingLevel);

    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
