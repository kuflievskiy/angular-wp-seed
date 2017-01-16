import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    BlogComponent
    ,BlogSingleComponent
    ,routingBlog
    ,moduleBlogRoutingProviders
} from './index';

import {PostsModule} from "../shared/posts/index";

@NgModule({
    imports: [
        CommonModule
        ,routingBlog

        ,PostsModule
    ],
    declarations: [
        BlogComponent
        ,BlogSingleComponent
    ],
    providers : [
        moduleBlogRoutingProviders
    ]
})

export class BlogModule {}