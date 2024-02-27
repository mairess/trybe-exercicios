interface Character {
    name: string;
    specialMove2: string;
  }
  
  interface DbCharacter extends Character {
    id: number;
  }
  
  const db: DbCharacter[] = [];

  interface IModel {
    create(): void,
    read(): void,
    update(): void,
    delete(): void,
  }

  class LocalDbModel implements IModel {
    constructor(private _name: string) {  }
    get name() { return console.log(this._name) }
    create(): void {
        console.log(`${this._name} have created successfully`);
    }
    read(): void {
        console.log(`${this._name} have read successfully`);
    }
    update(): void {
        console.log(`${this._name} have updated successfully`);
    }
    delete(): void {
        console.log(`${this._name} have deleted successfully`);
    }
  }
  
  const MySQL = new LocalDbModel('MySQL');

  MySQL.read()

  class CharacterService {
    private _localDbModel: LocalDbModel;
    constructor(localDbModel: LocalDbModel) { 
        this._localDbModel = localDbModel
     }

     performCRUDOperations() {
        this._localDbModel.create();
        this._localDbModel.read();
        this._localDbModel.update();
        this._localDbModel.delete();
     }
  }

const xablau = new CharacterService(MySQL);
