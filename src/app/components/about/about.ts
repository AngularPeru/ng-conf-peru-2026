import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.scss',
  template: `
    <section class="about">
      <img
        src="/images/angular-decoration.svg"
        alt=""
        class="about__decoration"
        aria-hidden="true"
      />
      <div class="about__inner">
        <h2 class="about__title">¿Qué es el Ng Conf Perú?</h2>
        <div class="about__text">
          <p>
            La Ng Conf Perú es la conferencia de tecnología más importante en el
            Perú dedicada exclusivamente al ecosistema de Angular.
          </p>
          <p>
            Es un evento que busca reunir a la comunidad de desarrolladores de
            software, desde principiantes hasta expertos, para compartir las
            últimas tendencias y mejores prácticas del framework de Google.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class About {}
