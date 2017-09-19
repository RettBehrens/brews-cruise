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
  newHotspring: Hotspring;
  photo: string;

  constructor(
  	private hotspringService: HotspringService,
  	private router: Router) { }

  getHotsprings(): void {
  	this.hotspringService
  		.getHotsprings()
  		.then(hotsprings => this.hotsprings = hotsprings);
  }

  createHotspring(hotspring: Hotspring): void {
    this.hotspringService.createHotspring(hotspring)
      .then(hotspring => {
        this.hotsprings.push(hotspring);
        this.selectedHotspring = null;
      });
  }

  delete(hotspring: Hotspring): void {
    this.hotspringService
        .delete(hotspring.id)
        .then(() => {
          this.hotsprings = this.hotsprings.filter(h => h !== hotspring);
          if (this.selectedHotspring === hotspring) { this.selectedHotspring = null; }
        });
  }

  ngOnInit(): void {
  	this.getHotsprings();
    this.newHotspring = new Hotspring();
    // this.photo = "/assets/images/robson-hatsukami-morgan-116208.jpg";
  }

  onSelect(hotspring: Hotspring): void {
  	this.selectedHotspring = hotspring;
  }

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedHotspring.id]);
  }

}
