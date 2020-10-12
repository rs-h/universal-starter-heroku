

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class CoursesService {

    static readonly API_URL = 'https://angular-universal-course-94047.firebaseio.com';

    constructor(private http: HttpClient) {

    }
}
