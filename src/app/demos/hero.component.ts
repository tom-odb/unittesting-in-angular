import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero.class';
import { SuperPower } from './hero.types';

@Component({
  selector: 'demo-hero',
  template: `
    <div class="o-hero-card">
      <h1>{{ hero?.name }}</h1>
      <p>{{ hero?.powers | superPowers }}</p>
      <button *ngFor="let power of hero?.powers" [usePower]="power" [hero]="hero">{{ powerLabels[power] }}</button>
    </div>
  `,
})
export class HeroComponent implements OnInit {
  @Input() public hero: Hero;

  public hasFlown = false;
  public powerLabels = {
    [SuperPower.FLIGHT]: 'flight',
    [SuperPower.STRENGTH]: 'strength',
    [SuperPower.TELEKINESIS]: 'telekinesis',
  };

  public ngOnInit(): void {
    this.hasFlown = this.hero.getPowerUsedCount(SuperPower.FLIGHT) > 0;
  }
}
