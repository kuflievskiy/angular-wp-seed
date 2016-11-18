import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    BlogComponent
    ,routingBlog
    ,moduleBlogRoutingProviders
} from './index';

import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule
        ,routingBlog

        ,SharedModule
    ],
    declarations: [
        BlogComponent
    ],
    providers : [
        moduleBlogRoutingProviders
    ]
})

export class BlogModule {}