import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {HomeComponent} from './home/index';

const appRoutes: Routes = [
    { path : '', component : HomeComponent }
	//,{ path : '**', redirectTo: ''}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);