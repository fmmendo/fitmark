import { Component, OnInit } from '@angular/core';
import { BenchmarkService } from '../benchmark.service';
import { UserData, Gender } from '../model/userData';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private Gender = Gender;
  private GenderValues = Object.values(Gender).filter(e => typeof (e) == "number");
  userData: UserData;
  //genderList: any[] = [];

  constructor(private benchmarkService: BenchmarkService, private location: Location) { }

  ngOnInit() {
    this.getUserData();
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

  save(): void {
    this.benchmarkService.saveUserData(this.userData);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
