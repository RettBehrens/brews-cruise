import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';
import { HotSpringsService } from '../hotSprings.service';
// import { mapboxgl } from 'mapbox-gl'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapLat;
  mapLng;

  getMyLocation() {
    navigator.geolocation.getCurrentPosition(res => {
      this.mapLat = res.coords.latitude;
      this.mapLng = res.coords.longitude;
      console.log(this.mapLat + ' ' + this.mapLng);
      // this.getHotSprings();
    })
  }

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this.getMyLocation();
  }

  ngAfterViewInit() {
    this._mapService.makeMap();
  }

}


  // private hotSpringsService : HotSpringsService
  
  // lat;
  // lng;

  // import mapboxgl from 'mapbox-gl';
  // or "const mapboxgl = require('mapbox-gl');" 

  // allHotSprings = [];

  

  // getHotSprings() {
  //   console.log('getting hot springs from database');
  //   this.hotSpringsService.getAllHotSprings()
  //     .subscribe(response => {
  //       console.log(response.json());
  //       this.allHotSprings = response.json()
  //     });
  // }


