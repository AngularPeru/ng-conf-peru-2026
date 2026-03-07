import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sponsor-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './sponsor-cta.scss',
  template: `
    <section class="sponsor-cta">
      <img
        src="/images/decoration-vector.svg"
        alt=""
        class="sponsor-cta__decoration"
        aria-hidden="true"
      />
      <h2 class="sponsor-cta__title">
        Únete como Sponsor de la Ng Conf Perú 2026
      </h2>
      <div class="sponsor-cta__inner">
        <div class="sponsor-cta__image">
          <img src="/images/sponsor-image.png" alt="Sponsors en la conferencia" />
        </div>
        <div class="sponsor-cta__text">
          <p>
            El éxito de la Ng Conf Perú depende en gran medida del generoso
            apoyo de nuestros valiosos patrocinadores.
          </p>
          <p>
            Colabora con nosotros para presentar tu marca de una forma nueva e
            innovadora. Aprovecha la oportunidad de mostrar tus productos y
            servicios e interactuar con apasionados desarrolladores.
          </p>
          <p>
            ¡Juntos podemos crear una experiencia excepcional para la comunidad
            de desarrollo de Angular!
          </p>
          <a href="#" class="btn-rose sponsor-cta__btn">
            Quiero ser patrocinador
          </a>
        </div>
      </div>
    </section>
  `,
})
export class SponsorCta {}
