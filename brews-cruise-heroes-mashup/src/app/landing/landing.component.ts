import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  photo: string;
  
  constructor() { }

  ngOnInit() {
  	// this.photo = "/assets/images/robson-hatsukami-morgan-116208.jpg";
  }

}
