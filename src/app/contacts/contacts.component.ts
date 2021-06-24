import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `

  <section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Я Вам рада</h1>
  </div>
  </div>
  </section>

    <div class="container">
    <div class="column is-desktop is-vcentered">
      <h1 class="title">Используя данную форму Вы можете адресовать мне письмо</h1>
      <p>Используя данную форму Вы можете адресовать мне письмо</p>
    </div>
  </div>
  
  <section class="section">
    <div class="container">

  <!--define form-->
  <form (ngSubmit)="processForm()" #contactsForm="ngForm">

    <div class="field">
      <label class="label">Name</label>
      <input type="text" 
        name="name" 
        class="input" 
        placeholder="Your Name" 
        [(ngModel)]="name" 
        #nameInput="ngModel" 
        required>

      <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
        Your name is required
      </div>
    </div>
    
    <div class="field">
      <label class="label">Email</label>
      <input type="email" 
        name="email" 
        class="input" 
        placeholder="Your Email" 
        [(ngModel)]="email" 
        #emailInput="ngModel"
        required 
        email>

      <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
        Your email is required and needs to be a valid email
      </div>
    </div>

    <div class="field">
      <!--message field-->
      <label class="label required">Message</label>
      <textarea name="message" class="area" placeholder="What's on your mind?" [(ngModel)]="message"></textarea>
    </div>

    <button type="submit" class="button is-large is-warning" [disabled]="contactsForm.invalid">
      Submit
    </button>
  </form>

  </div>
  </section>

  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
    //create api call
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 

}

}