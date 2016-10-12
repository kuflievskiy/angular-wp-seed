import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";


//import {ContactComponent} from './contact.component';
//import { AlbumComponent, AlbumMainComponent } from './album/index';

const appRoutes: Routes = [
    //{ path: '', component: AlbumsComponent }
    //,{ path: 'albums', component: AlbumsComponent }
    //, { path : '**', redirectTo: 'albums'}
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);