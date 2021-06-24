import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  
  <section class="hero is-primary is-bold">
  <div class="hero-body">
    <p class="title">
      Коуч Кристина Петренко
    </p>
  </div>
  </section>
  
  <section class="section">
  <div class="container py-4">
    <h2 class="title has-text-centered mb-6">Добро пожаловать</h2>


    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="title is-justify">
          ПРИНЦИПЫ УСПЕШНОГО БИЗНЕСА И ОТНОШЕНИЙ, <br> ЖИЗНЬ В УДОВОЛЬСТВИЕ <br/>ЗАКОНЫ НЕ ДЛЯ ВСЕХ</h1>
        <p class="subtitle">We are located in one of the most vibrant and vibrant urban areas in London – Hampstead. We are a fast growing, one of London's fastest growing online retail businesses with a dedicated team of employees, a bright and vibrant office and a highly motivated customer base. We believe in doing something special and unique, we believe in having fun and we believe in trying new things, so our customers do too, and so we're a growing community of wellness enthusiasts who are passionate about what we do, and why we do it.
        </p>
        <a class="button is-primary is-bold" href="#">Записаться на коуч-сессию</a>
      </div>
      <div class="column"><img src="assets/img/main-photo.png" alt="test"></div>
    </div>
    <hr class="my-6">
    <div class="level">
      <div class="level-item">
        <div class="number has-background-primary">1</div>
        <h4 class="title is-4">Обучение коучингу для жизни и бизнеса</h4>
      </div>
      <div class="level-item">
        <div class="number">2</div>
        <h4 class="title is-4">Вторая опция</h4>
      </div>
      <div class="level-item">
        <div class="number">3</div>
        <h4 class="title is-4">Следующая опция</h4>
      </div>
    </div>
  </div>
</section>


  `,
  styles: [`
    .hero   {
      background-color: 'red' !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
