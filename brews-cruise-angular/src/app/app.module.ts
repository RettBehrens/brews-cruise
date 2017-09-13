import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { TestComponent } from './src/app/test/test.component';
import { AboutComponent } from './src/app/about/about.component';
import { AddFormComponent } from './src/app/add-form/add-form.component';
import { FavoriteItemComponent } from './src/app/favorite-item/favorite-item.component';
import { FavoritesComponent } from './src/app/favorites/favorites.component';
import { HeaderComponent } from './src/app/header/header.component';
import { LandingComponent } from './src/app/landing/landing.component';
import { LoginComponent } from './src/app/login/login.component';
import { MapComponent } from './src/app/map/map.component';
import { SignupComponent } from './src/app/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    AddFormComponent,
    FavoriteItemComponent,
    FavoritesComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    MapComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
