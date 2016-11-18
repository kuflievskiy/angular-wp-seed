import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	HomeComponent
	,routing
	,moduleRoutingProviders
} from './index';

import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
		CommonModule
		,routing

		,SharedModule
	],
    declarations: [	
		HomeComponent
	],
	providers : [
		moduleRoutingProviders
	]
})

export class HomeModule {}