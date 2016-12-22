import { NgModule,enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {environment} from './environments/environment';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule }    from '@angular/http';

import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

if (environment.production) {
    enableProdMode();
}

@NgModule({
  imports:      [ 
	BrowserModule 
	, routing
	, HttpModule
	,FormsModule
	//, Form
	, ReactiveFormsModule
	
	// custom modules
	,HomeModule
	,BlogModule
  ]
  ,declarations: [ 
	AppComponent

	// custom components
 ]
  ,bootstrap:    [
  	AppComponent
	]
  ,providers:[
	appRoutingProviders
	,  {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule {}