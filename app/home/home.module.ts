import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	HomeComponent
	,routing
	,moduleRoutingProviders
} from './index';

import {PostsModule} from "../shared/posts/index";

@NgModule({
    imports: [
		CommonModule
		,routing

		,PostsModule
	],
    declarations: [	
		HomeComponent
	],
	providers : [
		moduleRoutingProviders
	]
})

export class HomeModule {}