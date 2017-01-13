import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from '../intefaces/post.interface';

@Component({
    selector: 'posts',
    template: `
         <template [ngIf]="isPostsReady">
              <div *ngFor="let post of posts" class="card-block card">
                <template [ngIf]="post.featured_image">
                      <a href="{{post.link}}" title="{{post.title}}" target="_blank">
                      <img class="card-img-center" src="{{post.featured_image.attachment_meta.sizes.thumbnail.url}}" alt="{{post.title}}"/>
                      </a>
                </template>
                <h4 class="card-title"><a href="{{post.link}}" title="{{post.title.rendered}}">{{post.title.rendered}}</a></h4>
                <p class="card-text" [innerHTML]="post.excerpt.rendered"></p>              
                <p class="card-text">Posted on {{post.date}} by {{post.author?.nickname}}</p>                
                <a href="{{post.link}}" class="btn btn-primary">Read More</a>
              </div>
        </template>
        
        <div *ngIf="!isPostsReady">
            Fetching the posts....
        </div>

  `,
    styles:[`
        .card{
            border: 1px solid gray;
            min-height:350px;
        }
    `],
    providers: [
        PostsService
    ]
})

export class PostsComponent {

    public posts:Post[];
    public isPostsReady = false;

    constructor(private postsService:PostsService){
        this.postsService
            .getPosts()
            .subscribe((values:Post[])=>{
                this.isPostsReady = true;
                this.posts = values;
                console.log(values);
            })
        ;

    }
}