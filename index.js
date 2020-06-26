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
			type: 'PLAYING',
		}
	})
});


bot.on('message', msg => {
	
	if(msg.content == '!!ping'){
		msg.reply('pong');
	}
  
	if(msg.content == '!!avatar'){
		msg.reply(msg.author.displayAvatarURL({format: "png", dynamic: true, size: '2048'}));
	}


	if(msg.content === '!!help'){
		
	}
});


bot.login(token)