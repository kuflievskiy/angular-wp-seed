import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 Wordpress Seed project</h1>

    <nav>
      <a routerLink="albums">MENU ITEM 1</a>
      <a routerLink="contact">MENU ITEM 2</a>    
    </nav>

		<!-- Routed views go here -->
        <router-outlet></router-outlet>
  `
})
export class AppComponent { }