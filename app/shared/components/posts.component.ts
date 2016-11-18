import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";


//import {PostsService} from '../services/posts.service';

@Component({
    selector: 'posts',
    template: `
        posts will be here ..
        <div *ngIf="isPostsReady">
            <ul>
                <li *ngFor="let post of posts">
                    <p><a href="{{post.link}}" title="{{post.title}}">{{post.title}}</a></p>                    
                    <p>Date : {{post.date}}</p>
                    <p>Author: <a href="{{post.author.meta.links.self}}" title="{{post.author.nickname}}">{{post.author.nickname}}</a></p>
                    
                    <div>{{post.content}}</div>                  
                    
                    <img *ngIf="null != post.featured_image" src="{{post.featured_image}}" />
                    
                </li>
            </ul>
            {{posts|json}}
        </div>
        
        <div *ngIf="!isPostsReady">
            
            Fetching the posts....
        </div>
        
        isPostsReady:
        {{isPostsReady}}
  `,
    providers: [
        PostsService
    ]
})

export class PostsComponent {

    public posts = [];
    public isPostsReady = false;

    constructor(private postsService:PostsService){
        this.postsService
            .getPosts('http://test.kuf.hulk.nixsolutions.com/wp-json/')
            .subscribe((values)=>{
                this.isPostsReady = true;
                this.posts = values;
            })
        ;

    }
}