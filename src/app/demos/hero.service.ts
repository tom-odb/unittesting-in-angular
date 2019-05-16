import { Injectable } from '@angular/core';

import { HeroRepository } from './hero.repository';
import { SuperPower } from './hero.types';
import { Hero } from './hero.class';

@Injectable()
export class HeroService {
  constructor(
    private heroRepo: HeroRepository,
  ) {}

  public registerHero(name: string, powers: SuperPower[]): Hero {
    this.heroRepo.registerHero(name, powers);

    return this.heroRepo.getHero(name);
  }
}
