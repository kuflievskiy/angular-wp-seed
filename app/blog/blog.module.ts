import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    BlogComponent
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
    ],
    providers : [
        moduleBlogRoutingProviders
    ]
})

export class BlogModule {}