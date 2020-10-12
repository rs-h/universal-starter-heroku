import { IProgram } from './../interfaces/program.interface';
import { SpacexService } from './../services/spacex.service';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CoursesService} from '../services/courses.service';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';

import {Meta, Title} from '@angular/platform-browser';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    filters = {};
    results: IProgram[] = [];

    constructor(
        private route: ActivatedRoute,
        private coursesService: CoursesService,
        private title: Title,
        private meta: Meta,
        private readonly spacexService: SpacexService) {
            this.route.queryParams.subscribe((data) => {
                console.log('query params', data);
                this.filters = data;
                this.updateResults();
            });
        }

    ngOnInit() {
    }

    updateResults() {
        this.spacexService.applyFilters(this.filters).subscribe((data: IProgram[]) => {
            this.results = data;
        });
    }
}
