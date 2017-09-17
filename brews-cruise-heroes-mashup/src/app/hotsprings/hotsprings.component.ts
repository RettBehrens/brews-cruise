import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hotspring } from '../hotspring';
import { HotspringService } from '../hotspring.service';


@Component({
  selector: 'app-hotsprings',
  templateUrl: './hotsprings.component.html',
  styleUrls: ['./hotsprings.component.css']
})
export class HotspringsComponent implements OnInit {

	hotsprings: Hotspring[];
	selectedHotspring: Hotspring;

  constructor(
  	private hotspringService: HotspringService,
  	private router: Router) { }

  getHotsprings(): void {
  	this.hotspringService
  		.getHotsprings()
  		.then(hotsprings => this.hotsprings = hotsprings);
  }

  ngOnInit(): void {
  	this.getHotsprings();
  }

  onSelect(hotspring: Hotspring): void {
  	this.selectedHotspring = hotspring;
  }

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedHotspring.id]);
  }

}
