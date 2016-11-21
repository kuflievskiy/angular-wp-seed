import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'my-app',
  template: `
    <header>    
        <div class="navbar navbar-static-top navbar-dark bg-inverse">
            <div class="container-fluid">        
                <div class="col-xs-2">
                    <a routerLink="/" class="navbar-brand">
                        <ng-content select=".slogan"></ng-content>
                    </a>
                </div>
                <div class="col-xs-10">
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <a class="nav-link" routerLink="/" [class.active]="isActive('')">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="/blog" [class.active]="isActive('blog')">Blog</a>
                      </li>                      
                    </ul>
                </div>
            </div>
        </div>    
    </header>
    <content>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
    </content>
    <footer></footer>
  `
})
export class AppComponent {
  router : Router;
  constructor(router:Router) {
    this.router = router;
  }

  isActive(slug): boolean {
    return this.router.isActive(slug,true);
  }
}