import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `

  <section class="section" id="services">
    <div class="container has-text-centered py-4">
      <h2 class="title">Услуги</h2>
      <div class="column ">
        <p> Первая коучинг-сессия является вводной и бесплатной. 
          Каждая последующая сессия оплачивается по договоренности после заключения коучингового соглашения. 
          Возможно приобретение пакета из 12 индивидуальных коучинг-сессий. 
          Сессия проводятся очно (Киев) и по ZOOM с другими городами и странами. 
          Также проводится групповой бизнес-коучинг по работе с запросом руководства. 
          Записаться и получить детальную информацию можно <a href="#link" alt="hint">здесь</a>
        </p>
      </div>
    <hr class="my-6">
    <div class="columns">
      <div class="column">
        <h3 class="title is-4">Персональные консультации</h3>
        <h4 class="title is-spaced is-5">$10 <small>Per user / monthly</small></h4>
        <p class="subtitle">Join our network, but build and manage everything yourself.</p>
        <hr>
        <ul>

        <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <button type="button" class="btn btn-primary">Button</button>
  </div>
</div>

        </ul>
        <hr>
        <div class="buttons is-centered">
          <button class="button is-primary" type="button">Contact Sales</button>
        </div>
      </div>
      <div class="column">
        <h3 class="title is-4">Рергессионный гипноз</h3>
        <h4 class="title is-spaced is-5">$50 <small>Per user / monthly</small></h4>
        <p class="subtitle">We build what you need, but you still need to manage your data.</p>
        <hr>
        <ul>
          <li>1000GB storage</li>
          <li>20 Applications</li>
          <li>200 users max</li>
          <li>Unlimited Data Transfer</li>
        </ul>
        <hr>
        <button class="button is-primary is-outlined" type="button">Contact Sales</button>
      </div>
      <div class="column">
        <h3 class="title is-4">Терапия и личное сопровождение</h3>
        <h4 class="title is-spaced is-5">$100 <small>Per user / monthly</small></h4>
        <p class="subtitle">We do everything for you, including managing your data.</p>
        <hr>
        <ul>
          <li>Unlimited storage</li>
          <li>Unlimited Applications</li>
          <li>Unlimited users max</li>
          <li>Unlimited Data Transfer</li>
        </ul>
        <hr>
        <button class="button is-primary is-outlined" type="button">Contact Sales</button>
      </div>
    </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
