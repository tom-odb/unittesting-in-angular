import { Hero } from './hero.class';
import { SuperPower } from './hero.types';

describe('Hero', () => {
  it('should create a superhero', () => {
    const hero = new Hero('Bruce Banner', [SuperPower.STRENGTH]);

    expect(hero.name).toEqual('Bruce Banner');
    expect(hero.powers).toEqual([SuperPower.STRENGTH]);
  });

  it('should keep track of powers used', () => {
    const hero = new Hero('Superman', [SuperPower.STRENGTH, SuperPower.FLIGHT]);

    hero.usePower(SuperPower.STRENGTH);
    hero.usePower(SuperPower.FLIGHT);

    expect(hero.getPowerUsedCount(SuperPower.STRENGTH)).toEqual(1);
    expect(hero.getPowerUsedCount(SuperPower.FLIGHT)).toEqual(1);
  });

  it('should not track powers the hero doesn\'t have', () => {
    const hero = new Hero('Jean Grey', [SuperPower.TELEKINESIS]);

    hero.usePower(SuperPower.STRENGTH);
    hero.usePower(SuperPower.FLIGHT);
    hero.usePower(SuperPower.TELEKINESIS);

    expect(hero.getPowerUsedCount(SuperPower.STRENGTH)).toEqual(0);
    expect(hero.getPowerUsedCount(SuperPower.FLIGHT)).toEqual(0);
    expect(hero.getPowerUsedCount(SuperPower.TELEKINESIS)).toEqual(1);
  });
});
