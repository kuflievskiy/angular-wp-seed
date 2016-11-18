import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {PostsComponent} from "./index";

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

// https://github.com/spock123/angular2-webpack2-typescript2/blob/master/src/frontend/app/shared/shared.module.ts

export class SharedModule {}