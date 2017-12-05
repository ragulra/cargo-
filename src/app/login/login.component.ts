import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user = {
username: '',
password: ''
};
constructor(private router:Router) { }
    ngOnInit() {
    }
   
}