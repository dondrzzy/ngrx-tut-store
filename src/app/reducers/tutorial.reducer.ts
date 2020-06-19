import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

export function TutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  console.log('-----');
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      return state.filter((tut, i) => i !== action.payload)
    default:
      return state;
  }
}
