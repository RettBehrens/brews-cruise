import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = 'null';
  topics: FirebaseListObservable<any[]>;

  constructor(
  	private auth: AuthService,
  	public db: AngularFireDatabase) { } 

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  ngOnInit() {
  	this.auth.getAuthState().subscribe(
      (user) => this.user = user);
  		this.topics = this.db.list('/topics');
  }
}
