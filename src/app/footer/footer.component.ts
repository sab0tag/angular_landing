import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

<!--Footer-->
<footer class="text-center text-lg-start bg-light text-muted">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!--Left-->
    <div class="me-5 d-none d-lg-block">
      <span>Оставайтесь на связи:</span>
    </div>
    <!--Left-->

    <!--Right-->
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4 is-hidden">
            Полезные ссылки
          </h6>
          <p>
            <a href="/" class="text-reset">главная</a>
          </p>
          <p>
            <a href="#!" class="text-reset">обо мне </a>
          </p>
          <p>
            <a href="#!" class="text-reset">услуги</a>
          </p>
          <p>
            <a href="#!" class="text-reset">отзывы</a>
          </p>
          <p>
            <a href="#!" class="text-reset">консультация</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Контакты
          </h6>
          <p><i class="fas fa-home me-3"></i> Ukraine, UA 02232</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            <a href="contacts">Напиши мне</a>
          </p>
          <p><i class="fas fa-phone me-3"></i> + 38(066)153-0460</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>

  <!-- Section: Links  -->
  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Все права защищены
    <a class="text-reset fw-bold" href="#">Link</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->

`,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
