import { Component } from '@angular/core';

@Component({
    selector: 'blog-component',
    template: `

        <div class="album text-muted">
			<div class="container">
				<div class="row">
					<p>Blog page content goes here...</p>        
					<posts></posts>
				</div>
			</div>
        </div>
        
       

  `
})

export class BlogComponent {

    constructor(){
		console.log('BlogComponent here');
    }
}