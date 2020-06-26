const botconf = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const token = process.env.token;


bot.on("ready", () => {
  console.log(`------------------------------------------------------------------------`);
  console.log(`Kaer BOT pomyślnie się połączył!`);
  console.log(`------------------------------------------------------------------------`);
  bot.user.setPresence({
    status: 'dnd',
    activity: {
        name: 'Grand Theft Auto San Andreas',
        type: 'STREAMING',
    }
})
});


bot.on('message', msg => {
  if (msg.content === '!!ping') {
    msg.reply('pong');
  }
});


bot.login(token)