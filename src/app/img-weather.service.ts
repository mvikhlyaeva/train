import { Injectable } from '@angular/core';
import {weather} from './weather'
import {weatherData} from './data-about-weather'



@Injectable({
  providedIn: 'root'
})
export class ImgWeatherService {

  constructor() { }

  createPict(item: weather) :string {
      let pict: string =''
    if (item.prec == 'rainy') pict = 'http://s1.iconbird.com/ico/0912/FreeweatherconditionsIcons/w128h128134703143212.png';
    if (item.prec == 'cloudy') pict ='http://s1.iconbird.com/ico/0912/FreeweatherconditionsIcons/w128h128134703144026.png';
    if (item.prec == 'sunny') pict ='http://s1.iconbird.com/ico/0612/VistaStyleWeatherIconsSet/w128h1281339359698Sunny2.png';
  return pict;
}
}
