import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HotSpringsService {

	baseUrl = 'http://localhost:3000';

	getAllHotSprings() {
		return this.http.get(`${this.baseUrl}/api/hotSprings`);
	}

	constructor(private http : Http) { }

}