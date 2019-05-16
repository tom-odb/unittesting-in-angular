import { SuperPower } from './hero.types';

export class Hero {
  public name: string;
  public powers: SuperPower[];

  private powersUsed = new Set<SuperPower>();

  constructor(name: string, powers: SuperPower[]) {
    this.name = name;
    this.powers = powers;
  }

  public usePower(power: SuperPower): void {
    if (this.powers.includes(power)) {
      this.powersUsed.add(power);
    }
  }

  public getPowerUsedCount(power: SuperPower): number {
    return Array.from(this.powersUsed).filter((pwr: SuperPower) => power === pwr).length;
  }
}
