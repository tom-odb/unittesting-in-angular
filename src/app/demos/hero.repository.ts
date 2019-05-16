import { Injectable } from '@angular/core';

import { Hero } from './hero.class';
import { SuperPower } from './hero.types';

@Injectable()
export class HeroRepository {
  private heroes = new Set<Hero>();

  public registerHero(name: string, powers: SuperPower[]): Hero {
    const hero = new Hero(name, powers);

    this.heroes.add(hero);

    return hero;
  }

  public getHero(name: string): Hero {
    return Array.from(this.heroes).find((hero: Hero) => hero.name === name);
  }
}
