﻿import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'admin_home.component.html',
    styleUrls: ['admin_home.component.css']
})

export class AdminHomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }


    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            debugger;
            this.users = users;
        });
    }
}