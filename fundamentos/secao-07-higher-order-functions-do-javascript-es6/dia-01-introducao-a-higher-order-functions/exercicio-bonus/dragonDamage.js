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

  var max = 0;
for (let index = 0; index < 500000000; index += 1) {
    let attack = dragonAttack(dragon);
    if (attack > max) {
        max = attack;
    }  
}
console.log(max);