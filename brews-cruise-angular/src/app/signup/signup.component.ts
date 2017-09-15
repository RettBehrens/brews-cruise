import { Component, OnInit, OnDestroy } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data-storage.service';
import * as firebase from 'firebase';
import { ApiKeyService } from '../apikey.service';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  subscription: Subscription;
  newUser = <any>{};
  photo: string;
  message: any;
  firebaseError;
  
  constructor(
      private firebaseService: FirebaseService,
      private authService: AuthService,
      private dataService: DataService,
      private apiKeyService: ApiKeyService
   ) {
      this.subscription = this.firebaseService.startFirebase().subscribe(
         message => {
           this.message = message;
     });
   }

  ngOnInit() {
    // this.photo = "/assets/images/food-man-person-eating.jpg";
  }

  onSignup(newUser) {
    
    console.log("the new user is " + newUser);
  	const email = newUser.email;
  	const password = newUser.password;
    console.log(email);
    console.log(password);
    this.authService.signupUser(email, password);
    this.dataService.storeUser(email)
            .subscribe(response => {
              
              console.log("The json response is " + response.json());
          })
  }


}