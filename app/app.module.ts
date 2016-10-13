import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule }    from '@angular/http';

import { HomeModule } from './home/home.module';

import {FormsModule, Form, ReactiveFormsModule} from "@angular/forms";

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
export class AppModule { }