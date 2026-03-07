import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tickets.scss',
  template: `
    <section class="tickets">
      <div class="tickets__content">
        <h2 class="tickets__title">Consigue tu entrada ahora mismo</h2>
        <p class="tickets__text">
          Asegura tu lugar en la tercera edición de la Ng Conf Perú 2026 y
          disfruta de lo que estamos preparando para ti.
        </p>
        <a href="#" class="btn-primary tickets__btn">Comprar entrada</a>
      </div>
      <div class="tickets__images">
        <div class="tickets__card-top">
          <img src="/images/ticket-1.png" alt="Ticket Ng Conf" />
        </div>
        <div class="tickets__card-bottom">
          <img src="/images/ticket-2.png" alt="Ticket Ng Conf reverso" />
          <div class="tickets__fade"></div>
        </div>
      </div>
    </section>
  `,
})
export class Tickets {}
