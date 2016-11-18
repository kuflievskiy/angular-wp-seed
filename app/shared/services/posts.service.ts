import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // flatMap
//import {Observable} from "rxjs";

import {Post} from '../intefaces/post.interface';
@Injectable()
export class PostsService {

    private _http;

    constructor(_http: Http) {
        this._http = _http;
    }

    getPosts(baseURL){
        return this._http
                .get(baseURL + 'posts')
                .map(x=>{
                    return <Post>(<any>x).json();
                })

            ;
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