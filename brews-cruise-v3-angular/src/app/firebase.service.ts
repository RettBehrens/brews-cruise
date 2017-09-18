import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ApiKeyService } from './apikey.service';

@Injectable()
export class FirebaseService {
	firebaseInitialize = false;
	private firebaseService = new Subject<any>();

	constructor(private apiKeyService: ApiKeyService) { }
	
	startFirebase(): Observable<any> {
		console.log("calling start firebase");
		
		if (!this.firebaseInitialize) {
			console.log("Initializing firebase");
			this.firebaseInitialize = true;
			firebase.initializeApp({
      	apiKey: this.apiKeyService.firebaseApiKey,
      	authDomain: this.apiKeyService.firebaseAuthDomain
    	});
		} 
		
	  return this.firebaseService.asObservable();
	}
}