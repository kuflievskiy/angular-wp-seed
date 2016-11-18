import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	HomeComponent
	,routing
	,moduleRoutingProviders
 } from './index';

import {PostsComponent} from "../shared/index";

@NgModule({
    imports: [
		CommonModule
		,routing
	],
    declarations: [	
		HomeComponent
		, PostsComponent
	],
	providers : [
		moduleRoutingProviders
	]
})

export class HomeModule {}