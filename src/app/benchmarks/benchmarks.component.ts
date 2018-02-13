import { Component, OnInit } from '@angular/core';

import { Benchmark } from '../model/benchmark'
import { BenchmarkService } from '../benchmark.service'
import { BenchmarkEntry } from '../model/benchmarkEntry';
import { UserData } from '../model/userData';

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  userData: UserData;
  benchmarks: Benchmark[];
  //entries: BenchmarkEntry[];

  constructor(private benchmarkService: BenchmarkService) { }

  ngOnInit() {
    this.getUserData();
    this.getBenchmarks();
    //this.getBenchmarkEntries();
  }

  getUserData(): void {
    this.benchmarkService.getUserData().subscribe((d) => {
      // done
      if (d != null) {
        this.userData = d;
        console.log("loaded user data");

      }
      else {
        this.userData = new UserData();
        console.log("no user data to load");
      }
    }, () => {
      // error
      console.log("loading user data is broken");
    })
  }

  getBenchmarks(): void {
    this.benchmarkService.getBenchmarks().subscribe(b => this.benchmarks = b);
  }

  // getBenchmarkEntries(): void {
  //   this.benchmarkService.getEntries().subscribe(e => this.entries = e);
  // }
}
