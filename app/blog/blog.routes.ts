import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {BlogComponent} from "./components/blog.component";

const appBlogRoutes: Routes = [

 { path: 'blog', component:BlogComponent}
 /*
	{ path: '', component: BlogComponent
		//,children : []
		//, redirectTo : 'blog'
	}
*/
];

export const moduleBlogRoutingProviders: any[] = [
];

export const routingBlog: ModuleWithProviders = RouterModule.forRoot(appBlogRoutes);