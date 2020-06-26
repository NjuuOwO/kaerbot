const botconf = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const token = process.env.token;


bot.on("ready", async () => {
  console.log(`------------------------------------------------------------------------`);
  console.log(`Kaer BOT pomyślnie się połączył!`);
  console.log(`------------------------------------------------------------------------`);
  bot.user.setStatus('dnd')
  bot.user.setActivity('Grand Theft Auto San Andreas');
});


bot.on('message', msg => {
  if (msg.content === '!!ping') {
    msg.reply('pong');
  }
});


bot.login(token)