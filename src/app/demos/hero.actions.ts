import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { HeroRepository } from './hero.repository';

@Injectable()
export class HeroActions {
  public static FETCH_HERO = 'FETCH_HERO';

  constructor(
    private heroRepo: HeroRepository,
    private ngRedux: NgRedux<any>,
  ) {}

    public fetchHero(): void {
      const hero = this.heroRepo.getHero('Superman');

      this.ngRedux.dispatch({
        type: HeroActions.FETCH_HERO,
        payload: hero,
      });
    }
}
