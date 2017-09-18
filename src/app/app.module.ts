import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { HotspringsComponent } from './hotsprings/hotsprings.component';
import { HotspringDetailComponent } from './hotspring-detail/hotspring-detail.component';
import { HotspringSearchComponent } from './hotspring-search/hotspring-search.component';

import { HotspringService } from './hotspring.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LandingComponent,
    HotspringsComponent,
    HotspringDetailComponent,
    HotspringSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HotspringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
