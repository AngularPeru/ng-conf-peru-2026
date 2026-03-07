import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.scss',
  template: `
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__org">
          <span class="footer__org-label">Organizado por:</span>
          <div class="footer__logo">
            <img src="/images/logo_angular_peru_footer.svg" alt="Angular Perú" class="footer__logo-mark" />
          </div>
        </div>
      </div>
      <div class="footer__divider"></div>
      <div class="footer__bottom">
        <nav class="footer__nav">
          <a href="#" class="footer__link">Sobre Angular Perú</a>
          <a href="#codigo-de-conducta" class="footer__link">Código de conducta</a>
          <a href="#" class="footer__link">Contáctanos</a>
        </nav>
        <div class="footer__social">
          <span class="footer__social-label">Síguenos en</span>
          <div class="footer__social-icons">
            <a href="#" aria-label="Facebook">
              <img src="/images/ic-facebook.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/images/ic-instagram.svg" alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/images/ic-twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
