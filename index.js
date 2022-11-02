const TelegramApi = require('node-telegram-bot-api')
const sequelize = require('./db');
const UserModel = require('./modoles');


const token = '' //токен telegram

const bot = new TelegramApi(token, {polling: true})

const chats = {}
const startOptions = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Пройти опрос', callback_data: '/first'}],
            ]
        }) 
    }

    
    const One = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Геленджик', callback_data: '/one1'}],
                [{text: 'Крым', callback_data: '/one2'}],
                [{text: 'Сочи', callback_data: '/one3'}],
            ]
        }) 
    }

    const Two = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Галька', callback_data: '/two1'}],
                [{text: 'Песок', callback_data: '/two2'}],
            ]
        }) 
    }

    const Three = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '50.000руб', callback_data: '/three1'}],
                [{text: '100.000руб', callback_data: '/three2'}],
                [{text: '150.000руб', callback_data: '/three3'}],
                [{text: '200.000руб', callback_data: '/three4'}],
            ]
        }) 
    }



const start = async () => {

  try {
    await sequelize.authenticate()
    await sequelize.sync()
  } catch(e) {
    console.log('Подключение к бд сломалось',  e)
  }

  bot.setMyCommands ([ // Меню предложенное пользователю
  {command:'/start',  description: 'Начальное приветствие'},
])

bot.on('message', async msg => {
  const text =msg.text;
  const chatId = msg.chat.id;

  try { // Делаем в try что бы ошибка выводилась в консоль
  if(text === "/start") { 
    //await UserModel.create({chatId})
          return bot.sendMessage(chatId, `${msg.from.username}, Добро пожаловать в телеграмм бота! Здесь вы можете пройти опрос!`, startOptions)

      }

return bot.sendMessage(chatId, 'Я тебя не понимаю попробуй еще раз!)') // Сообщение если написана команда которой нет в коде
  } catch (e) { //  Вывод ошибки в консоль
    return bot.sendMessage(chatId, 'Произошла какая, то ошибочка!')
  } 


  
})

bot.on('callback_query', async msg => {
  const data = msg.data; // Получаем цифру
  const chatId = msg.message.chat.id;
if(data === '/first') {
          await  bot.sendMessage(chatId, `Первый вопрос! Куда бы вы хотели съездить этим летом на отдых?`, One);
            }
            const user = await UserModel.findOne({where:{chatId}})


        if(data === '/one1') {
       user.OneOne +=1;;
       await  bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
        }
        if(data === '/one2') {
            user.OneTwo +=1;;
            await  bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
            }
            if(data === '/one3') {
                user.OneThree +=1;;
                await bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
                }


                if(data === '/two1') {
                    user.TwoOne +=1;;
                    await   bot.sendMessage(chatId, `Третий вопрос! Кокой бюджет у вас на путешествие?`, Three);
                    }
                    if(data === '/two2') {
                        user.TwoTwo +=1;;
                        await  bot.sendMessage(chatId, `Третий вопрос! Кокой бюджет у вас на путешествие?`, Three);
                        }


                        if(data === '/three1') {
                           user.ThreeOne +=1;;
                           await  bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`,);
                            }

                        if(data === '/three2') {
                            user.ThreeTwo +=1;;
                            await  bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`,);
                            }

                        if(data === '/three3') {
                            user.ThreeThree +=1;;
                            await   bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`,);
                            }

                        if(data === '/three4') {
                            user.ThreeFour +=1;;
                            await  bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`,);
                            }
                            
                            await user.save(); 
  }



)
  //await user.save(); // Сохраняем user в базу
}


start()
