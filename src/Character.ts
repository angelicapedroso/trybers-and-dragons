import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype; 
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf(name, 1);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get name() { 
    return this._name; 
  }

  get race() { 
    return this._race; 
  }

  get archetype() { 
    return this._archetype; 
  }

  get maxLifePoints() { 
    return this._maxLifePoints; 
  }

  get lifePoints() { 
    return this._lifePoints; 
  }

  get strength() { 
    return this._strength; 
  }

  get defense() { 
    return this._defense; 
  }

  get dexterity() { 
    return this._dexterity; 
  }

  get energy() { 
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }

  levelUp() {
    if ((this._maxLifePoints + getRandomInt(1, 10)) 
      >= this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += getRandomInt(1, 10);
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    this._energy.amount = 10;

    this._lifePoints = this._maxLifePoints;
  }

  special() { 
    return this._maxLifePoints;
  }
}

export default Character;