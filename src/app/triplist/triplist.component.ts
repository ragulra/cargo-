import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css']
})

export class TriplistComponent implements OnInit {

  tripName: string = "hello";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}
