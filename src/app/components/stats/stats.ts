import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './stats.scss',
  template: `
    <section class="stats">
      <h2 class="stats__title">
        Sé parte del ecosistema de Angular en Perú
      </h2>
      <div class="stats__grid">
        <div class="stats__item">
          <span class="stats__number">+400</span>
          <span class="stats__label">asistentes</span>
        </div>
        <div class="stats__item">
          <span class="stats__number">10</span>
          <span class="stats__label">speakers</span>
        </div>
        <div class="stats__item">
          <span class="stats__number">3</span>
          <span class="stats__label">workshops</span>
        </div>
      </div>
    </section>
  `,
})
export class Stats {}
