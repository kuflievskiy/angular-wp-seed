import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // flatMap
//import {Observable} from "rxjs";

import {Page} from '../intefaces/page.interface';
@Injectable()
export class PagesService {

    private _http:Http;

    constructor(_http: Http) {
        this._http = _http;
    }

    getPosts(baseURL:string){
        return this._http
                .get(baseURL + 'pages')
                .map(x=>{
                    return <Page>(<any>x).json();
                })

            ;
    }
}