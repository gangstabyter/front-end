import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Flight } from '../_models/index';

@Injectable()
export class FlightService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/flights', this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}