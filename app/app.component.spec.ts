/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { HttpModule }    from '@angular/http';

import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

import {FormsModule, Form, ReactiveFormsModule} from "@angular/forms";

////////  SPECS  /////////////
describe('AppComponent', function () {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
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
            ],
            declarations: [ AppComponent ],
            providers:[
                appRoutingProviders
                ,  {provide: LocationStrategy, useClass: HashLocationStrategy}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );

    // it('should have expected <h1> text', () => {
    //     fixture.detectChanges();
    //     const h1 = de.nativeElement;
    //     expect(h1.innerText).toMatch(/angular/i,
    //         '<h1> should say something about "Angular"');
    // });
});