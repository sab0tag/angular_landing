import { Component, OnInit } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';


@Component({
  selector: 'app-reviews',
  template: `

    <div class="message-body">
      Отзывы и комментарии о моей работе
    </div>

    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v11.0" nonce="WtoWltNT"></script>

    <div class="fb-comments" data-href="https://www.facebook.com/100010072877927/posts/1460611587617923/?d=n" data-width="200" data-numposts="10"></div>

  `,
  styles: [
  ]
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
