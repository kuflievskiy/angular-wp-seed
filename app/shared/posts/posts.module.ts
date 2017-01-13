import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {PostsComponent} from "./components/posts.component";

@NgModule({
    imports: [
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