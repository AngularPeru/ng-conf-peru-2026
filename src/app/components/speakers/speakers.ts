import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Speaker {
  name: string;
  role: string;
  image: string;
  companyLogo: string;
}

@Component({
  selector: 'app-speakers',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './speakers.scss',
  template: `
    <section class="speakers" id="speakers">
      <h2 class="speakers__title">Nuestros Speakers</h2>
      <p class="speakers__subtitle">
        Muy pronto vamos a revelar a nuestros primeros speakers que estarán en
        esta edición.
      </p>
      <a href="#" class="btn-primary">Postula tu charla</a>
      <div class="speakers__grid">
        @for (speaker of speakersList; track speaker.name) {
          <div class="speakers__card">
            <div class="speakers__card-image">
              <img [src]="speaker.image" [alt]="speaker.name" />
              <div class="speakers__card-overlay">
                <img
                  [src]="speaker.companyLogo"
                  alt="Company"
                  class="speakers__card-company"
                />
              </div>
            </div>
            <h3 class="speakers__card-name">{{ speaker.name }}</h3>
            <p class="speakers__card-role">{{ speaker.role }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Speakers {
  readonly speakersList: Speaker[] = [
    {
      name: 'Sofía Martínez',
      role: 'Google Developer Expert Angular',
      image: '/images/speaker-placeholder.png',
      companyLogo: '/images/speaker-company.png',
    },
    {
      name: 'Sofía Martínez',
      role: 'Google Developer Expert Angular',
      image: '/images/speaker-placeholder.png',
      companyLogo: '/images/speaker-company.png',
    },
    {
      name: 'Sofía Martínez',
      role: 'Google Developer Expert Angular',
      image: '/images/speaker-placeholder.png',
      companyLogo: '/images/speaker-company.png',
    },
    {
      name: 'Sofía Martínez',
      role: 'Google Developer Expert Angular',
      image: '/images/speaker-placeholder.png',
      companyLogo: '/images/speaker-company.png',
    },
  ];
}
