import { IProgram } from './interfaces/program.interface';
import {Component} from '@angular/core';
import { LaunchYears, BooleanFilters } from './constants/filters.constant';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  years: string[] = LaunchYears;
  booleanFilters = BooleanFilters;
  searchFilters: IProgram = {
    land_success: null,
    launch_year: null,
    mission_id: null,
    launch_success: null,
    mission_name: null,
  };

  constructor(private readonly router: Router) {}

  onLaunchChange(value) {
    console.log('here?', value);
    this.searchFilters.launch_success = value;
    this.router.navigate(['/results'], { queryParams: this.getQueryParams()});
  }

  onLandingChange(value) {
    console.log('here?', value);
    this.searchFilters.land_success = value;
    this.router.navigate(['/results'], { queryParams: this.getQueryParams() });
  }

  onYearChange(value) {
    console.log('year here?', value);
    this.searchFilters.launch_year = value;
    this.router.navigate(['/results'], { queryParams: this.getQueryParams() });
  }


  getQueryParams(): Params {
    const obj: Params = {};
    for (const property in this.searchFilters ) {
      if (this.searchFilters[property]) {
        obj[property] = this.searchFilters[property];
      }
    }
    console.log('getquery', obj);
    return obj;
  }
}
