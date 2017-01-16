import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import {PostsComponent} from "./components/posts.component";

@NgModule({
    imports: [
        RouterModule.forChild([]),
        CommonModule
    ],
    declarations: [
        PostsComponent
    ],
    providers : [
    ],
    exports:[
        PostsComponent
    ]
})

export class PostsModule {}