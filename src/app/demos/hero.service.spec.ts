import { async, TestBed, inject } from '@angular/core/testing';

import { HeroRepository } from './hero.repository';
import { SuperPower } from './hero.types';
import { Hero } from './hero.class';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  const testHero = new Hero('test', [SuperPower.FLIGHT]);
  const mockHeroRepo = {
    registerHero: jasmine.createSpy().and.returnValue(testHero),
    getHero: jasmine.createSpy().and.returnValue(testHero),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        {
          provide: HeroRepository,
          useValue: mockHeroRepo,
        },
      ],
    });
  }));

  it('should register and return a hero with the HeroRepository', inject([HeroService], (heroService: HeroService) => {
    const hero = heroService.registerHero('Bruce Banner', []);

    expect(hero).toBe(testHero);
    expect(mockHeroRepo.registerHero).toHaveBeenCalled();
    expect(mockHeroRepo.getHero).toHaveBeenCalled();
  }));
});
