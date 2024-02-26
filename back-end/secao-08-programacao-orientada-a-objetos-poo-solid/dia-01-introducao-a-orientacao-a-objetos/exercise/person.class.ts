import Joi from 'joi';

const schemaName = Joi.object({
    name: Joi.string().min(3)
})

class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name:string, birthDate: Date) { 
        const { error } = schemaName.validate({name})
        const currentDate = new Date();
        if (error)  throw new Error(error.message);
        if (birthDate >= currentDate)  throw new Error('01/01/1900');
        this._name = name;
        this._birthDate = birthDate;
        this.validateAge();
    }

    private validateAge() {
        var timeDiff = Math.abs(Date.now() - new Date(this._birthDate).getTime());
        const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        if (age > 120) throw new Error('Age cannot be more than 120')
    }

    public get name() {
        return this._name
    }

    public get birthDate() {
        return this._birthDate
    }

    public setName(name: string) {
        return this._name = name;
    }

    public setBirthDate(date: Date) {
        const currentDate = new Date();
        if (date >= currentDate) throw new Error('Birth date cannot be in the future');
        this._birthDate = date;
        this.validateAge()
    }
    
}

const maires = new Person('Madruga', new Date('Sept 02, 1924'));
maires.setBirthDate(new Date('Oct 05, 1968'))
maires.setName("Julião Pereira")
console.log(maires);
