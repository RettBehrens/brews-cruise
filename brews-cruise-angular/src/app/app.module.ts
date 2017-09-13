import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule } from '@agm/core';

// import { AuthService } from './auth.service';
// import { DataService } from './data-storage.service';
// import { ApiKeyService } from './apikey.service';
// import { FavoritesService } from './favorites.service';
// import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FavoriteItemComponent } from './favorite-item/favorite-item.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddFormComponent,
    FavoriteItemComponent,
    FavoritesComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    MapComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    // HttpModule,
    RouterModule,
    // FavoritesRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
    })
  ],
  providers: [
    // FavoritesService,
    // AuthService,
    // ApiKeySevice,
    // DataService,
    // FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
