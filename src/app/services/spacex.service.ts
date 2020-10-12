import { IProgram } from '../interfaces/program.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable()
export class SpacexService {

    static readonly API_URL = 'https://api.spacexdata.com/v3/launches?limit=100';

    constructor(private http: HttpClient) {

    }

    getAllPrograms(): Observable<IProgram[]> {
        return this.http.get<IProgram[]>(SpacexService.API_URL);
    }

    applyFilters(filters): Observable<IProgram[]> {
        const params = this.getFilterParams(filters);
        return  this.http.get<IProgram[]>(`${SpacexService.API_URL}&${params.toString()}`);
    }

    getFilterParams(filters): URLSearchParams {
        const params = new URLSearchParams();
        for (const key in filters) {
            params.set(key, filters[key]);
        }
        return params;
    }
}
