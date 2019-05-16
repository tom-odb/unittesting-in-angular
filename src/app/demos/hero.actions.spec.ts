import { async, inject, TestBed } from '@angular/core/testing';
import { NgRedux } from '@angular-redux/store';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';

import { HeroActions } from './hero.actions';
import { HeroRepository } from './hero.repository';
import { SuperPower } from './hero.types';

const mockReponse = {
  name: 'Bruce Banner',
  powers: [SuperPower.FLIGHT],
};

class MockHeroRepository {
  public getHero() {
    return mockReponse;
  }
}

describe('Redux mock example', () => {
  const mockNgRedux: NgRedux<any> = MockNgRedux.getInstance();

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgReduxTestingModule,
      ],
      providers: [
        HeroActions,
        { provide: HeroRepository, useClass: MockHeroRepository },
      ],
    });
  }));

  it('should fetch heros and store them in the state', inject([HeroActions], (heroActions: HeroActions) => {
        spyOn(mockNgRedux, 'dispatch');

        heroActions.fetchHero();

        expect(mockNgRedux.dispatch).toHaveBeenCalledWith({
          type: HeroActions.FETCH_HERO,
          payload: mockReponse,
        });
      }));
});
