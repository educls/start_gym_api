import mysql from "mysql2/promise";
const config = require('../../knexfile');

class Database {
    connection: any;
    constructor() {
        this.connection = null;
    } 

    async connect() {
        try {
            this.connection = await mysql.createConnection({
                host: config.development.connection.host,
                user: config.development.connection.user,
                password: config.development.connection.password,
                database: config.development.connection.database
            });
            // console.log("Conexão com o banco de dados estabelecida!");
        } catch (err) {
            console.log("Erro ao conectar ao banco de dados: ", err);
        }
    }

    async query(sqlCommand: string, values: any[]) {
        try {
            if (!this.connection) {
                throw new Error("Conexão não estabelecida!");
            }
            console.log(sqlCommand);

            const [rows] = await this.connection.execute(sqlCommand, values);
            return rows;
        } catch (err) {
            console.log("Erro ao executar a consulta: ", err);
        }
    }

    async close() {
        try {
            if (this.connection) {
                await this.connection.end();
                // console.log("Conexão com o banco de dados fechada!");
            }
        } catch (err) {
            console.log("Erro ao fechar conexão com o banco de dados: ", err);
        }
    }
}

export default Database;