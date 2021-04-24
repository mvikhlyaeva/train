import { Component, OnInit } from '@angular/core';
import {weather} from "../weather"
import {weatherData} from "../data-about-weather"

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

    weatherWeek = weatherData;

  constructor() { }

  ngOnInit(): void {
  }

}
