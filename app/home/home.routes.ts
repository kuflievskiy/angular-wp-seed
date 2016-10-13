import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from './index';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent
		//,children : []
		, redirectTo : ''
	}
];

export const moduleRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);