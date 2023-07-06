const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.ceil(Math.random() * (dragon.strength - minDmg)) + minDmg;
  return maxDmg;
};

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  return Math.ceil(Math.random() * (maxDmg - minDmg)) + minDmg;
};

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const dmg = Math.ceil(Math.random() * (maxDmg - minDmg)) + minDmg;
  const turnStatus = { 
      manaSpent: 0,
      damageDelt: 'Não possui mana suficiente...'}

  if (mageMana < 15) {
      return turnStatus;
  }

  turnStatus.manaSpent = 15;
  turnStatus.damageDelt = dmg;
  return turnStatus;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStatus = mageAttack(mage);
    const mageDamage = mageTurnStatus.manaSpent;
    dragon.healthPoints -= mageDamage;
    mage.mana -= mageTurnStatus.damageDelt
    mage.damage = mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());