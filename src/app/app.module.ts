import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { FormsModule } from '@angular/forms';

import { postReducer } from './reducers/post.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //  Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
