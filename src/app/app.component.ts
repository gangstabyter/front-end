import { Component } from '@angular/core';
import { User, Flight } from './_models/index';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor() {
        let user = new User;
        user.id = 1;
        user.login = "user";
        user.firstName = 'Ivan';
        user.lastName = 'Ivanov';
        user.password = 'user';
        user.role = 'ROLE_USER';
        user.token = "token";


        let admin = new User;
        admin.id = 2;
        admin.login = "admin";
        admin.firstName = 'Petr';
        admin.lastName = 'Petrov';
        admin.password = 'admin';
        admin.role = 'ROLE_ADMIN';
        admin.token = "token";

        let users: Array<User> = [];
        users.push(user);
        users.push(admin);

        let flights: Array<Flight> = [];

        for (let i = 0; i < 5; i++) {
            let flight = new Flight;
            flight.id = i;
            flight.arrivalTime = new Date;
            flight.departureTime = new Date;
            flight.flightNumber = "# " + i;
            flight.goesFrom = "Place " + i;
            flight.goesTo = "Place " + i;
            flights.push(flight);
        }

        localStorage.clear();
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('flights', JSON.stringify(flights));
    }
}