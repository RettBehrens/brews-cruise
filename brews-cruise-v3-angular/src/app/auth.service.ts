import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data-storage.service';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
	//user: Observable<firebase.User>;
	baseUrl = 'http://localhost:3000';
	// Token return by firebase
	token: string;

	// User id returned by firebase
	uid: string;

	// email returned by firebase
	email: string;

	// Create a new user
	newUser = <any>{};

	constructor(
		private http: Http,
		private router: Router,
		private dataService: DataService
	) {}


	// Sign up new user with firebase
	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(response => {

				this.newUser = response.email;
				// console.log("The new user is " + this.newUser)
				
					
				// Make sure user is authenticated
				firebase.auth().currentUser.getToken()
					.then(
						(token: string) => this.token = token)
				// Then route to home page

				this.router.navigate(['/home']);
			})
			.catch(function(error) {
				return error;
			})

	}

	loginUser(email: string, password: string) {
		// console.log('logging in user');

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				response => {
					// console.log(response);
					// console.log(response.uid);
					this.uid = response.uid;
					// console.log(this.uid);
					this.email = response.email;
					
					// console.log(response.email);
					//Get token for authorization
					firebase.auth().currentUser.getToken()
						.then(
							(token: string) => this.token = token)
					//route user to homepage
					this.router.navigate(['/home']);
					
					
			})
			.catch(function(error){
				return error;
			}
		);

	};

	getToken() {
		firebase.auth().currentUser.getToken()
			.then(
				(token: string) => this.token = token
			);
			// need to call data service to get user info

			// console.log("calling get token");
			
			return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}

	// logout
	logout() {
		firebase.auth().signOut();
		this.router.navigate(['']);
		this.token = null;
	}
}