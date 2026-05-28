module.exports={
  client:'pg',

  connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: process.env.pwd,
    database: 'me_todo_db',
  },

  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};