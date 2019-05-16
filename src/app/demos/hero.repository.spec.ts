import { async, TestBed, inject } from '@angular/core/testing';

import { HeroRepository } from './hero.repository';
import { SuperPower } from './hero.types';
import { Hero } from './hero.class';

describe('HeroRepository', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroRepository,
      ],
    });
  }));

  it('should register a hero', inject([HeroRepository], (heroRepo: HeroRepository) => {
    expect(() => {
      heroRepo.registerHero('Spiderman', [SuperPower.STRENGTH]);
    }).not.toThrowError();
  }));

  it('should return a registered hero', inject([HeroRepository], (heroRepo: HeroRepository) => {
    heroRepo.registerHero('Spiderman', [SuperPower.STRENGTH]);

    const hero = heroRepo.getHero('Spiderman');

    expect(hero instanceof Hero).toBeTruthy();
    expect(hero.name).toEqual('Spiderman');
    expect(hero.powers).toEqual([SuperPower.STRENGTH]);
  }));
});
