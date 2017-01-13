import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <page-header></page-header>
    <content>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
    </content>
    <footer></footer>
  `
})
export class AppComponent {

}