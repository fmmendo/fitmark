import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule }    from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BenchmarksComponent } from './benchmarks/benchmarks.component';
import { BenchmarkDetailComponent } from './benchmark-detail/benchmark-detail.component';
import { BenchmarkService } from './benchmark.service';
import { BenchmarkSearchComponent } from './benchmark-search/benchmark-search.component';


@NgModule({
  declarations: [
    AppComponent,
    BenchmarksComponent,
    BenchmarkDetailComponent,
    DashboardComponent,
    BenchmarkSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [BenchmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
