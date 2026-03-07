import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-venue',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './venue.scss',
  template: `
    <section class="venue" id="venue">
      <h2 class="venue__title">
        Lima será la capital de la Ng Conf Perú 2026
      </h2>
      <div class="venue__subtitle">
        <p>
          La conferencia se celebrará Lima, y estamos definiendo el lugar ideal
          para esta experiencia.
        </p>
        <p>¡Muy pronto lo anunciaremos!</p>
      </div>
      <div class="venue__content">
        <div class="venue__left">
          <div class="venue__photo">
            <img src="/images/venue-1.png" alt="UTEC Lima" />
          </div>
          <div class="venue__info">
            <h3 class="venue__name">
              Universidad de Ingeniería y Tecnología - UTEC
            </h3>
            <p class="venue__address">
              Jr. Medrano Silva 165, Barranco 15063
            </p>
            <a href="#" class="btn-outline-rose venue__map-btn">
              Ver en Google Maps
            </a>
          </div>
        </div>
        <div class="venue__right">
          <img src="/images/venue-2.png" alt="Mapa de ubicación" />
        </div>
      </div>
    </section>
  `,
})
export class Venue {}
