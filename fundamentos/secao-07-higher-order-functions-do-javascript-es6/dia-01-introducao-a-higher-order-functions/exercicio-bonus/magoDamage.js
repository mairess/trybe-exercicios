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
console.log(mageAttack(mage));