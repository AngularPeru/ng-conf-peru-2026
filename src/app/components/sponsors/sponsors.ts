import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './sponsors.scss',
  template: `
    <section class="sponsors">
      <img
        src="/images/sponsors-frame.svg"
        alt=""
        class="sponsors__frame"
        aria-hidden="true"
      />
      <h2 class="sponsors__title">Sponsors</h2>

      <h3 class="sponsors__tier">Gold</h3>
      <div class="sponsors__logos sponsors__logos--gold">
        <div class="sponsors__card">
          <img
            src="/images/sponsor-venue-card.svg"
            alt=""
            class="sponsors__hex"
            aria-hidden="true"
          />
          <img
            src="/images/ic_googledevs 1.svg"
            alt="Google for Developers"
            class="sponsors__logo"
          />
        </div>
        <div class="sponsors__card">
          <img
            src="/images/sponsor-venue-card.svg"
            alt=""
            class="sponsors__hex"
            aria-hidden="true"
          />
          <img
            src="/images/Capa_1.svg"
            alt="Codeabien"
            class="sponsors__logo"
          />
        </div>
      </div>

      <h3 class="sponsors__tier">Venue</h3>
      <div class="sponsors__logos">
        <div class="sponsors__card">
          <img
            src="/images/sponsor-venue-card.svg"
            alt=""
            class="sponsors__hex"
            aria-hidden="true"
          />
          <img
            src="/images/CardRecurso 1 2.svg"
            alt="UTP"
            class="sponsors__logo sponsors__logo--venue"
          />
        </div>
      </div>

      <h3 class="sponsors__tier">Support</h3>
      <div class="sponsors__logos">
        <div class="sponsors__card">
          <img
            src="/images/sponsor-venue-card.svg"
            alt=""
            class="sponsors__hex"
            aria-hidden="true"
          />
          <img
            src="/images/sessionize-logo-vertical-invert.svg"
            alt="Sessionize"
            class="sponsors__logo sponsors__logo--support"
          />
        </div>
      </div>

      <a href="#" class="btn-white">Quiero ser patrocinador</a>
    </section>
  `,
})
export class Sponsors {}
