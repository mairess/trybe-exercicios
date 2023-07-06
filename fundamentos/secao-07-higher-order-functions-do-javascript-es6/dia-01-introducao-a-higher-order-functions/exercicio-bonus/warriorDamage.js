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

  const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = warrior.strength * warrior.weaponDmg;
    return Math.ceil(Math.random() * (maxDmg - minDmg)) + minDmg;
  };

var max = 0;
for (let index = 0; index < 50000000; index += 1) {
    let attack = warriorAttack(warrior);
    if (attack > max) {
        max = attack;
    }  
}
console.log(max);