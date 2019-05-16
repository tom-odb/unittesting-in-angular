import { Component, DebugElement } from '@angular/core';
import { async, TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { SuperPowersPipe } from './powers.pipe';
import { SuperPower } from './hero.types';

@Component({
  selector: 'demo-test',
  template: '{{ powers | superPowers }}',
})
class TestComponent {
    public powers = [SuperPower.FLIGHT, SuperPower.TELEKINESIS];
}

describe('SuperPowersPipe', () => {
  describe('as provider', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [
          SuperPowersPipe,
        ],
      });
    }));

    it('should map the superpowers to readable text', inject([SuperPowersPipe], (superPowers: SuperPowersPipe) => {
      expect(superPowers.transform([SuperPower.STRENGTH, SuperPower.FLIGHT])).toEqual('very strong, can fly');
    }));
  });

  describe('as pipe', () => {
    let fixture: ComponentFixture<TestComponent>;
    let comp: TestComponent;
    let de: DebugElement;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          SuperPowersPipe,
          TestComponent,
        ],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement;
    });

    it('should map the superpowers to readable text', () => {
      fixture.detectChanges();

      expect(de.nativeElement.textContent).toEqual('can fly, moves things with their mind');
    });
  });
});
