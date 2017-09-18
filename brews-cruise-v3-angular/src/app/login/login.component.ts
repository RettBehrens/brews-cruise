import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import  { DataService } from '../data-storage.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ApiKeyService } from '../apikey.service';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  message: any;
  photo: string;
  newUser = <any>{}
  loggedInUser = <any>{}
  firebaseError;

  constructor(
              private firebaseService: FirebaseService,
              private authService: AuthService,
              private dataService: DataService,
              private apiKeyService: ApiKeyService,
              private router: Router) { 
     this.subscription = this.firebaseService.startFirebase().subscribe(
         message => {
           this.message = message;
     });
  }

  ngOnInit() {
    
    // this.photo = "/assets/images/suit-business-man-business-man-37547.jpeg";
  	
  }

  onLogin(form: NgForm) {
  	console.log("onLogin clicked");
    const email = form.value.email;
    console.log(email);
    const password = form.value.password;
    console.log(password);
    this.newUser = { email, password};
    this.authService.loginUser(email, password);
    this.dataService.getUser(email)
      .subscribe(
          (response => {
            console.log("The json response is " + response.json());
          })
       )
  
      
  }

}