import { Component, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { UsePowerDirective } from './power.directive';
import { SuperPower } from './hero.types';
import { Hero } from './hero.class';

@Component({
  selector: 'demo-test',
  template: '<button [usePower]="superPower" [hero]="hero">Use power</button>',
})
class TestComponent {
  public superPower = SuperPower.FLIGHT;
  public hero = new Hero('Hawkman', [SuperPower.FLIGHT]);
}

describe('UsePowerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let comp: TestComponent;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        UsePowerDirective,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should use the selected power on click', () => {
    fixture.detectChanges();

    const button = de.nativeElement.querySelector('button');

    button.click();

    expect(comp.hero.getPowerUsedCount(SuperPower.FLIGHT)).toEqual(1);
  });
});
