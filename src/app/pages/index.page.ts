import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { About } from '../components/about/about';
import { Stats } from '../components/stats/stats';
import { Tickets } from '../components/tickets/tickets';
import { Gallery } from '../components/gallery/gallery';
import { Speakers } from '../components/speakers/speakers';
import { SponsorCta } from '../components/sponsor-cta/sponsor-cta';
import { Team } from '../components/team/team';
import { Venue } from '../components/venue/venue';
import { Sponsors } from '../components/sponsors/sponsors';
import { Cta } from '../components/cta/cta';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Hero,
    About,
    Stats,
    Tickets,
    Gallery,
    Speakers,
    SponsorCta,
    Team,
    Venue,
    Sponsors,
    Cta,
    Footer,
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-stats />
      <app-tickets />
      <app-gallery />
      <app-speakers />
      <app-sponsor-cta />
      <app-team />
      <app-venue />
      <app-sponsors />
      <app-cta />
    </main>
    <app-footer />
  `,
})
export default class Home {}
