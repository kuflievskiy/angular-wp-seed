import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import {Observable} from "rxjs";


@Injectable()
export class PostsService {

    private _baseUrl = 'http://test.kuf.hulk.nixsolutions.com/wp-json/';
    private _http;

    constructor(_http: Http) {
        this._http = _http;
    }

    getPosts(){
        return this._http
                .get(this._baseUrl + 'posts')
                .map(x=>{
                    return (<any>x).json();
                });
    }
    // deletePost
    // DELETE /posts/<id>

    // getPostRevisions(postID)
    // GET /posts/<id>/revisions
    //
    // getPosts(filter:[])
    // GET /posts?filter[posts_per_page]=8&filter[order]=ASC
    // GET /posts?type[]=post&type[]=page
    //
    // getPost(postID)
    // GET /posts/<id>
}