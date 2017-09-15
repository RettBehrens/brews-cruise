import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable()
export class MapService {

	constructor() { }

	makeMap() {
		
		var map = L.map('map').setView(defaultCoords, defaultZoom);
		
		map.maxZoom = 100;

		L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

	}

}