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
// module.exports = {
//     development: {
//         client: 'mysql',
//         connection: {
//             host: '23.111.128.161',
//             user: 'dauracom_edu',
//             password: 'dubaile@2307',
//             database: 'dauracom_startgym'
//         },
//         migrations: {
//             tableName: 'knex_migrations'
//         }
//     }
// };