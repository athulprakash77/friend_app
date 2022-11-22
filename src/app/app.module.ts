import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { ViewallfriendComponent } from './viewallfriend/viewallfriend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myroutes:Routes=[

{path:"",component: FriendComponent},
{path:"viewallfriend",component: ViewallfriendComponent}

]




@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    ViewallfriendComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
