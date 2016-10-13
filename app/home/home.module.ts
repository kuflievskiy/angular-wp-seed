import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	HomeComponent
	,routing
	,moduleRoutingProviders
 } from './index';

@NgModule({
    imports: [
		CommonModule
		,routing
	],
    declarations: [	
		HomeComponent
	],
	providers : [
		moduleRoutingProviders
	]
})

export class HomeModule { }