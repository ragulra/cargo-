import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
    login(){
    console.log("hai this is new function");
    this.router.navigate(['/triplist']);
    }
}