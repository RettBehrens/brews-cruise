import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HotspringSearchService } from '../hotspring-search.service';
import { Hotspring } from '../hotspring';

@Component({
  selector: 'app-hotspring-search',
  templateUrl: './hotspring-search.component.html',
  styleUrls: ['./hotspring-search.component.css'],
  providers: [HotspringSearchService]
})
export class HotspringSearchComponent implements OnInit {

  hotsprings: Observable<Hotspring[]>;
  private searchTerms = new Subject<string>();

  constructor(
  	private hotspringSearchService: HotspringSearchService,
    private router: Router) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  	this.hotsprings = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.hotspringSearchService.search(term)
        // or the observable of empty hotsprings if there was no search term
        : Observable.of<Hotspring[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Hotspring[]>([]);
      });
  }

  gotoDetail(hotspring: Hotspring): void {
    let link = ['/detail', hotspring.id];
    this.router.navigate(link);
  }

}
