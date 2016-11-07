import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }