import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../models/app.state';
import * as TutorialActions from '../actions/tutorial.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;



  constructor(private store: Store<AppState>) {
    this.tutorials$ = store.select('tutorial');
    console.log('this.tutorials', this.tutorials$);
  }

  ngOnInit() {
  }

  removeTutorial(i) {
    console.log('component: ', i);
    this.store.dispatch(new TutorialActions.RemoveTutorial(i))
  }

}
