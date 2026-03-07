import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './gallery.scss',
  template: `
    <section class="gallery">
      <h2 class="gallery__title">Revive los mejores momentos</h2>
      <p class="gallery__subtitle">
        Nuestra conferencia ha sido un viaje de momentos y conexiones
        inolvidables.
      </p>
      <div class="gallery__grid">
        <div class="gallery__item gallery__item--sm">
          <img src="/images/gallery-1.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--sm">
          <img src="/images/gallery-5.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--tall">
          <img src="/images/gallery-3.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--tall">
          <img src="/images/gallery-4.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--wide">
          <img src="/images/gallery-7.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--wide">
          <img src="/images/gallery-8.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--sm">
          <img src="/images/gallery-6.png" alt="Momento conferencia" />
        </div>
        <div class="gallery__item gallery__item--cta">
          <img
            src="/images/arrow-right.svg"
            alt=""
            class="gallery__arrow"
          />
          <span class="gallery__cta-text">VER GALERÍA</span>
        </div>
      </div>
    </section>
  `,
})
export class Gallery {}
