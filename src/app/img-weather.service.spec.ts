import { TestBed } from '@angular/core/testing';

import { ImgWeatherService } from './img-weather.service';

describe('ImgWeatherService', () => {
  let service: ImgWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
