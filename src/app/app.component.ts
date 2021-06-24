import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-root',
  animations: [

  ],
  template: `

    
  <!-- Font Awesome -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <!-- MDB -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
      rel="stylesheet"
    />
    <!--Add the Facebook JavaScript SDK to your index.html-->
    <script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>


    <app-header></app-header>
    <app-search></app-search>
    <router-outlet></router-outlet>

    <app-footer></app-footer>

  `,
  styles: [`
  
  `
  ]
})

export class AppComponent {
  title = 'site';

}
