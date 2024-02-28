abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;

    static characterPresentation(character: Character) {
        character.talk();
        character.specialMove();
    }
}

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMove: string) { super() }
    talk(): void { console.log(`${this._name} is talking`) }
    specialMove(): void { console.log(`${this._name} is filming ${this._specialMove}"`) }
    static introduceCharacters() {
        console.log(`Esse é o: ${MeleeCharacter.name}`);
    }
    get theName() { return console.log(this._name) }

}

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMove: string) { super() }
    talk(): void { console.log(`${this._name} is talking about money`) }
    specialMove(): void { console.log(`${this._name} is filming ${this._specialMove}`) }
    get theName() { return console.log(this._name) }
}



const Yoshi = new MeleeCharacter('Yoshi', 'Matrix')
const Samus = new LongRangeCharacter('Samus', 'The Punisher')

// Yoshi.talk()
// Yoshi.specialMove()
// Yoshi.theName

// Samus.talk()
// Samus.specialMove()
// Samus.theName

Character.characterPresentation(Yoshi);
Character.characterPresentation(Samus);