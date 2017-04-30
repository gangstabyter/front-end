import { Component, OnInit } from '@angular/core';

import { Flight } from '../_models/index';
import { FlightService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'user_home.component.html'
})

export class UserHomeComponent implements OnInit {
    flights: Flight[] = [];

    constructor(private flightService: FlightService) {
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.flightService.getAll().subscribe(flights => { this.flights = flights; });
    }
}