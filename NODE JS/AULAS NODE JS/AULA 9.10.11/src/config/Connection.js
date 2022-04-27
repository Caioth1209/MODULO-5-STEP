const mongoose = require('mongoose');

class Connection {

    constructor() {
        this.databaseConnectionMongoDb();
    }

    databaseConnectionMongoDb(){
        this.mongoDbConnection = mongoose.connect("mongodb://localhost/nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        .then(()=> {
            console.log("\n\nConexão estabelecida com o mongo db!");
        })
        .catch((erro)=> {
            console.log("\nErro ao estabelecer conexão com o mongo db: " + erro);
        });
    }
}

module.exports = new Connection();