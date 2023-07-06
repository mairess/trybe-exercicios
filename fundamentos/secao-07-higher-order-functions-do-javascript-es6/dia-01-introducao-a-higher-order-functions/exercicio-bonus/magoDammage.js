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

const mageAttack = (mage) => { 
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = mage.intelligence * 2;
    
    let dmg = 0;
    if (mageMana < 15) {
        dmg = 'Não possui mana suficiente';
        return { dmg, manaGasta: 0 };
    }

    mage.mana -= 15;
    dmg = Math.ceil(Math.random() * (maxDmg - minDmg)) + minDmg;
    return { dmg, manaGasta: 15 };
 };
 console.log(mageAttack(mage));