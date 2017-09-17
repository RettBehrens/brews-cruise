import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { HotspringsComponent } from './hotsprings/hotsprings.component';
import { HotspringDetailComponent } from './hotspring-detail/hotspring-detail.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'hotsprings',
		component: HotspringsComponent
	},
	{
		path: 'detail/:id',
		component: HotspringDetailComponent
	},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}