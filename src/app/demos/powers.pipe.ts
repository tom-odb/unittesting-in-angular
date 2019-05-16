import { Pipe, PipeTransform } from '@angular/core';
import { SuperPower } from './hero.types';

@Pipe({
  name: 'superPowers',
})
export class SuperPowersPipe implements PipeTransform {
  public transform(powers: SuperPower[]): string {
    return powers.map(this.getSuperPowerName).join(', ');
  }

  private getSuperPowerName(power: SuperPower): string {
    switch (power) {
      case SuperPower.FLIGHT:
        return 'can fly';
      case SuperPower.STRENGTH:
        return 'very strong';
      case SuperPower.TELEKINESIS:
        return 'moves things with their mind';
      default:
        return '';
    }
  }
}
