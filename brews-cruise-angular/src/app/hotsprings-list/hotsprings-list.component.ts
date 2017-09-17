import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-hotsprings-list',
  templateUrl: './hotsprings-list.component.html',
  styleUrls: ['./hotsprings-list.component.css']
})
export class HotspringsListComponent implements OnInit {
hotsprings: FirebaseListObservable<any[]>;
  constructor(public af: AngularFireDatabase) {
  	this.hotsprings = af.list('/HotSprings');
  }

  ngOnInit() {
  }

}
