import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}

export default Necromancer;