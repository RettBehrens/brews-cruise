import { Component, OnInit } from '@angular/core';
import { HotSpringsService } from '../hotSprings.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	// lat: number = 39.758451;
  // lng: number = -105.00762450000002;
  mapLat;
  mapLng;
  lat;
  lng;

  allHotSprings = [];

  getMyLocation() {
    navigator.geolocation.getCurrentPosition(res => {
      this.mapLat = res.coords.latitude;
      this.mapLng = res.coords.longitude;
      console.log(this.mapLat + ' ' + this.mapLng);
      this.getHotSprings();
    })
  }

  getHotSprings() {
    console.log('getting hot springs from database');
    this.hotSpringsService.getAllHotSprings()
      .subscribe(response => {
        console.log(response.json());
        this.allHotSprings = response.json()
      });
  }

  constructor(
    private hotSpringsService : HotSpringsService
  ) { }

  ngOnInit() {
  	this.getMyLocation();
  }

}
