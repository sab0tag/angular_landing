import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!--
  #stickyMenu
      [class.sticky] = "sticky"
-->
    <nav class="navbar is-primary-light">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <a href="#"><img src="assets/img/logo.png"></a>
        </a>
      </div>
      <!-- menu -->
      <div class="navbar-end">
        <div class="navbar-item navbar-default navbar-fixed-top">
          <a class="navbar-item" routerLink="/">главная</a>
          <a class="navbar-item" routerLink="about">обо мне</a>
          <a class="navbar-item" href="#services" routerLink="service">услуги</a>
          <a class="navbar-item" routerLink="reviews">отзывы</a>
          <a class="navbar-item" routerLink="contacts">контакты</a>
          <a class="navbar-item" routerLink="users">Пользователи</a>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <!--<a class="button is-primary" href="#">Log in</a>-->
            <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true">услуги</span>
              <span aria-hidden="true">отзывы</span>
              <span aria-hidden="true">контакты</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

`,


styles: [
  `
  .sticky{
    position: fixed;
    top: 0;
    overflow: hidden;
    z-index: 10;
    width: 100%;
  }

  .content{
    height: 200vh;  
  }
`  
  ]
  
})


export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  constructor() {}
  ngOnInit() {}

   ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}