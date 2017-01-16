import { Component } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from '../intefaces/post.interface';
import {Router} from "@angular/router";

@Component({
    selector: 'posts',
    templateUrl: 'app/shared/posts/components/posts.component.html',
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

    public router:Router;

    constructor(private postsService:PostsService, router:Router){
        this.router = router;
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