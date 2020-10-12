import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import {first, tap} from 'rxjs/operators';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, TransferState} from '@angular/platform-browser';


@Injectable()
export class CourseResolver implements Resolve<any> {

    constructor(
        private coursesService: CoursesService,
        private transferState: TransferState,
        @Inject(PLATFORM_ID) private platformId) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {

        const courseId = route.params['id'];

        const COURSE_KEY = makeStateKey<any>('courseKey-' + courseId);

       return null;
    }

}
