import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {weather} from '../weather'
import {weatherData} from '../data-about-weather'
import {ImgWeatherService } from '../img-weather.service'

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.css']
})
export class OneDayComponent implements OnInit {

    weath!: weather;
    pict!: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public imgWeatherService: ImgWeatherService
  ) { }

  ngOnInit(): void {
      this.weath=this.getWeather();
      this.pict = this.imgWeatherService.createPict(this.getWeather());
  }

  getWeather(): weather {
    const day = Number(this.route.snapshot.paramMap.get('id'));
    return  weatherData.find(item => item.day==day) as weather;
  }
}
