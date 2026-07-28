import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-hero',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrl: './hero.scss',
	template: `
		<section class="hero">
			<img src="/images/machu-picchu.svg" alt="Machu Picchu illustration" class="hero__bg-image" />
			<div class="hero__content">
				<p class="hero__date">9 y 10 DE OCTUBRE DE 2026 | LIMA - PERÚ</p>
				<h1 class="hero__title">Ng Conf Perú<br />2026</h1>
				<p class="hero__description">
					¡Únete a nosotros para una experiencia única en una conferencia sobre Angular en Perú! Descubre lo último en
					desarrollo de Angular y conecta con expertos y otros desarrolladores.
				</p>
				<div class="hero__actions">
					<a href="#" class="btn-primary">Comprar entradas</a>
					<a href="#" class="btn-outline">Postular tu charla</a>
				</div>
			</div>
		</section>
	`,
})
export class Hero {}
