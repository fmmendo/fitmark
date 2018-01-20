import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here

import { AppComponent } from './app.component';
import { BenchmarksComponent } from './benchmarks/benchmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    BenchmarksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
