import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Post } from '../../shared/posts/intefaces/post.interface';

@Component({
    selector: 'blog-single-component',
    template: `
        
        <template *ngIf="isPostReady">
            
        </template>

  `
})

export class BlogSingleComponent {

    post: Post;
    isPostReady : boolean = false;
    constructor(private router: Router, private route: ActivatedRoute){
		console.log('BlogSingleComponent here');
    }

    ngOnInit() {

        console.log(this.route);
//        this.route.params.forEach((params: Params) => {
//            let slug = params['slug'];
//            this.getPost(slug);

//        });
    }
}