import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here

import { AppComponent } from './app.component';
import { BenchmarksComponent } from './benchmarks/benchmarks.component';
import { BenchmarkDetailComponent } from './benchmark-detail/benchmark-detail.component';
import { BenchmarkService } from './benchmark.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BenchmarksComponent,
    BenchmarkDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BenchmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
