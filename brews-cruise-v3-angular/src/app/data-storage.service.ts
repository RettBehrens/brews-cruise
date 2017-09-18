// access database on backend

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DataService {

	constructor(private http: Http) { }

	user;

	baseUrl = 'http://localhost:3000';

	storeUser(email) {
		console.log("sending user data to backend");
		
		return this.http.post(`${this.baseUrl}/api/users/`, email);

	}
	//${uid}
	getUser(email) {
		console.log("the user id is" + email);
		console.log("sending user data to backend");

		return this.http.get(`${this.baseUrl}/api/users/${email}`);
	}

	storeFavorites(newFavorite) {
		console.log("******new favorite added");
		console.log(newFavorite);
	}



}