module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'startgymdb'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};