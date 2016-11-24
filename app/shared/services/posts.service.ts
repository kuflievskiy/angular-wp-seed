import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'; // flatMap
//import {Observable} from "rxjs";

import {Post} from '../intefaces/post.interface';

import {environment} from "../../environments/environment";

@Injectable()
export class PostsService {

    private _http:Http;
	private _environment:Object;

    constructor(_http: Http) {
        this._http = _http;
		this._environment = environment;
    }

    getPosts():Observable<Post[]>{
        return this._http
			.get(environment.WPAPI.endpoint + 'posts')
			.map(x=>{

				return x.json();
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