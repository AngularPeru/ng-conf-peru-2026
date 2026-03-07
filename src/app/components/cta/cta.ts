import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cta.scss',
  template: `
    <section class="cta">
      <img
        src="/images/cta-decoration.svg"
        alt=""
        class="cta__decoration-left"
        aria-hidden="true"
      />
      <img
        src="/images/cta-vector.svg"
        alt=""
        class="cta__decoration-right"
        aria-hidden="true"
      />
      <h2 class="cta__title">
        Conecta con la comunidad de Angular en un evento que no puedes perderte
      </h2>
      <div class="cta__actions">
        <a href="#" class="btn-outline-white">Únete a la lista de espera</a>
        <a href="#" class="btn-white-violet">Quiero ser patrocinador</a>
      </div>
    </section>
  `,
})
export class Cta {}
