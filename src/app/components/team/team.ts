import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './team.scss',
  template: `
    <section class="team">
      <h2 class="team__title">Nuestros Team</h2>
      <div class="team__grid">
        @for (member of members; track $index) {
          <div class="team__member">
            <div class="team__avatar">
              <img
                src="/images/team-shape.svg"
                alt=""
                class="team__shape"
              />
              <img
                src="/images/team-intersect.png"
                alt="Team member"
                class="team__photo"
              />
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class Team {
  readonly members = [0, 1, 2, 3];
}
