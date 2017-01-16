import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {BlogComponent} from "./components/blog.component";
import {BlogSingleComponent} from "./components/blog.single.component";

const appBlogRoutes: Routes = [
	{
		path: 'blog',
		pathMatch: 'full',
		component: BlogComponent
	},
	{
		path: 'blog/:slug',
		pathMatch: 'full',
		component: BlogSingleComponent
	}
];

export const moduleBlogRoutingProviders: any[] = [
];

export const routingBlog: ModuleWithProviders = RouterModule.forRoot(appBlogRoutes);