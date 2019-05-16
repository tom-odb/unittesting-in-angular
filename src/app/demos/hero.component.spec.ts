import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { SuperPower } from './hero.types';
import { Hero } from './hero.class';
import { SuperPowersPipe } from './powers.pipe';
import { UsePowerDirective } from './power.directive';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let comp: HeroComponent;
  let de: DebugElement;

  describe('providing all dependencies', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeroComponent,
          SuperPowersPipe,
          UsePowerDirective,
        ],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HeroComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should show the provided hero', () => {
      comp.hero = new Hero('Superman', [SuperPower.FLIGHT, SuperPower.STRENGTH]);

      fixture.detectChanges();

      const buttons = de.nativeElement.querySelectorAll('button');

      expect(buttons.length).toEqual(2);
      expect(buttons[0].textContent).toEqual('flight');
      expect(buttons[1].textContent).toEqual('strength');

      const name = de.nativeElement.querySelector('h1');

      expect(name.textContent).toEqual('Superman');

      const powers = de.nativeElement.querySelector('p');

      expect(powers.textContent).toEqual('can fly, very strong');
    });
  });

  xdescribe('mocking all dependencies', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeroComponent,
          // SuperPowersPipe,
        ],
        schemas: [
          NO_ERRORS_SCHEMA,
        ],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HeroComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should show the provided hero', () => {
      comp.hero = new Hero('Superman', [SuperPower.FLIGHT, SuperPower.STRENGTH]);

      fixture.detectChanges();

      const buttons = de.nativeElement.querySelectorAll('button');

      expect(buttons.length).toEqual(2);
      expect(buttons[0].textContent).toEqual('flight');
      expect(buttons[1].textContent).toEqual('strength');

      const name = de.nativeElement.querySelector('h1');

      expect(name.textContent).toEqual('Superman');

      const powers = de.nativeElement.querySelector('p');

      expect(powers.textContent).toEqual('can fly, very strong');
    });
  });
});
