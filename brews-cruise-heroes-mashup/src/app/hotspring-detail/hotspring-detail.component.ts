import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hotspring } from '../hotspring';
import { HotspringService } from '../hotspring.service';

@Component({
  selector: 'app-hotspring-detail',
  templateUrl: './hotspring-detail.component.html',
  styleUrls: ['./hotspring-detail.component.css']
})
export class HotspringDetailComponent implements OnInit {

	hotspring: Hotspring;

  constructor(
  	private hotspringService: HotspringService,
    private route: ActivatedRoute,
    private location: Location
  	) { }

  ngOnInit(): void {
  	this.route.paramMap
      .switchMap((params: ParamMap) => this.hotspringService.getHotspring(+params.get('id')))
      .subscribe(hotspring => this.hotspring = hotspring);
  }

  goBack(): void {
    this.location.back();
  }

}
