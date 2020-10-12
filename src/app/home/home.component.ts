import { LaunchYears } from './../constants/filters.constant';
import { IProgram } from './../interfaces/program.interface';
import { SpacexService } from './../services/spacex.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from '../services/courses.service';
import {map, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    results: IProgram[] = [];
    years: string[] = LaunchYears;

    constructor(private coursesService: CoursesService,
                private title: Title,
                private readonly spacexService: SpacexService) {

    }

    ngOnInit() {
        this.spacexService.getAllPrograms().subscribe((data) => {
            this.results = data;
        });
    }

}
