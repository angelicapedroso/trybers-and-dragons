import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }
}

export default Dwarf;