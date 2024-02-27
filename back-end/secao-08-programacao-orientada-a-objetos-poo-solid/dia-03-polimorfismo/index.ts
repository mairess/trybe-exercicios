class DataBase {
    connect() {
        console.log('Fazendo a conexão em um banco de dados genérico!');
    }
}

class MongoDataBase extends DataBase {
    connect() {
        console.log('Fazendo a conexão em um banco de dados Mongo!');
    }
}

class MySQLDataBase extends DataBase {
    connect() {
        console.log('Fazendo a conexão em um banco de dados MySQL!');
    }
}
const generic = new DataBase()
const mongo = new MongoDataBase()
const mysql = new MySQLDataBase()

function connectToDataBase(db: DataBase) {
    db.connect()
}

connectToDataBase(generic)
connectToDataBase(mongo)
connectToDataBase(mysql)
