import { Directive, Input, HostListener } from '@angular/core';

import { Hero } from './hero.class';
import { SuperPower } from './hero.types';

@Directive({
  selector: '[usePower]', // tslint:disable-line
})
export class UsePowerDirective {
  @Input() public hero: Hero;
  @Input() public usePower: SuperPower;

  @HostListener('click') public handleClick() {
    this.hero.usePower(this.usePower);
  }
}
