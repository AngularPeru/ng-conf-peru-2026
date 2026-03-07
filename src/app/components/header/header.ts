import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './header.scss',
  template: `
    <header class="header">
      <button
        class="header__burger"
        [class.header__burger--open]="menuOpen()"
        (click)="menuOpen.set(!menuOpen())"
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="header__nav" [class.header__nav--open]="menuOpen()">
        <a href="#speakers" class="header__link" (click)="menuOpen.set(false)">Speakers</a>
        <a href="#venue" class="header__link" (click)="menuOpen.set(false)">Venue</a>
        <a href="#agenda" class="header__link" (click)="menuOpen.set(false)">Agenda</a>
        <a href="#codigo-de-conducta" class="header__link" (click)="menuOpen.set(false)">Código de Conducta</a>
        <a href="#faq" class="header__link" (click)="menuOpen.set(false)">FAQ</a>
        <a href="#" class="btn-outline-rose" (click)="menuOpen.set(false)">Quiero ser patrocinador</a>
        <a href="#" class="header__btn-buy" (click)="menuOpen.set(false)">Comprar entradas</a>
        <span class="header__lang">ES &nbsp;|&nbsp; EN</span>
      </nav>
    </header>
  `,
})
export class Header {
  menuOpen = signal(false);
}
