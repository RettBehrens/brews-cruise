import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hotspring } from './hotspring';

@Injectable()
export class HotspringService {
	
	private headers = new Headers({'Content-Type': 'application/json'});
  private hotspringsUrl = 'api/hotsprings';  // URL to web api

  constructor(private http: Http) { }

  getHotsprings(): Promise<Hotspring[]> {
  	return this.http.get(this.hotspringsUrl)
  		.toPromise()
  		.then(response => response.json().data as Hotspring[])
  		.catch(this.handleError);
  }

  getHotspring(id: number): Promise<Hotspring> {
  	const url = `${this.hotspringsUrl}/${id}`;
  	return this.http.get(url)
  		.toPromise()
  		.then(response => response.json().data as Hotspring)
  		.catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}