import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyDAe01cMlK4IWJMX4_KoTn9gSEKnfydK0M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
