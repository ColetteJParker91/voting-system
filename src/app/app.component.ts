import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'voting-system';

  post: Observable<Post>;
  text!: string;
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
    this.message$ = this.store.select('message');
  }

  germanMessage() {
    this.store.dispatch({ type: 'GERMAN' });
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
