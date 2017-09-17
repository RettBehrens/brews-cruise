import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from 'environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { DataService } from './data-storage.service';
import { ApiKeyService } from './apikey.service';
// import { HotSpringsService } from './hotSprings.service';
// import { FavoritesService } from './favorites.service';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { AddFormComponent } from './add-form/add-form.component';
// import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
// import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
// import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
// import { HotspringsListComponent } from './hotsprings-list/hotsprings-list.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDgqxZsaq-KeYKfXSr-j-_kkxW3mEzCXI8",
    authDomain: "brewscruise-722ac.firebaseapp.com",
    databaseURL: "https://brewscruise-722ac.firebaseio.com",
    projectId: "brewscruise-722ac",
    storageBucket: "brewscruise-722ac.appspot.com",
    messagingSenderId: "4562156923"
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // AddFormComponent,
    // FavoriteItemComponent,
    // FavoritesComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    // MapComponent,
    SignupComponent,
    HomeComponent,
    // HotspringsListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // AngularFireAuthModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    // FavoritesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    // FavoritesService,
    AuthService,
    ApiKeyService,
    DataService,
    FirebaseService,
    // HotSpringsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
