import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hotspring } from './hotspring';

@Injectable()
export class HotspringSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hotspring[]> {
    return this.http
               .get(`api/hotsprings/?name=${term}`)
               .map(response => response.json().data as Hotspring[]);
  }
}