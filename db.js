const {Sequelize} = require('sequelize')

  
module.exports = new Sequelize(

'bot_tgg', // Имя базы данных
'root', // Логин
'-rY&<kbjd88',  // Пароль от базы
{
        host: '127.0.0.1', // Хост
        port: '3306', // Порт
        dialect: 'mysql' // База
}      
)
