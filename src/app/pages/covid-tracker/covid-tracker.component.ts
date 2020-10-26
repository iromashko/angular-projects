import { Component, OnInit } from '@angular/core';
import { CovidService } from './covid.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.scss'],
})
export class CovidTrackerComponent implements OnInit {
  data;

  constructor(private covidService: CovidService) {
    this.getDataFromApi();
  }

  public getDataFromApi() {
    this.covidService.getData().subscribe(
      (res) => {
        this.data = res;
        console.log(this.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
