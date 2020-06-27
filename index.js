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
	if(msg.channel.id != "725340463782953072") return;
	
	
	if(msg.content == '!!ping') return msg.reply('pong');

	if(msg.content == '!!avatar'){
		let user = message.mentions.users.first();
		if(!user) user = message.author;
		
		msg.channel.send(user.avatarURL);
	}


	if(msg.content == '!!help'){
		let helpembed = new Discord.MessageEmbed()
		.setTitle('Komendy')
		.setColor('#00FFFF')
		.addField("!!help", 'Pokazuje komendy')
		.addField("!!avatar", 'Pokazuje twój, lub wspomianej osoby awatar.')
		.addField("!!ping", 'Pong!');
		
		msg.channel.send(helpembed);
	}
});


bot.login(token)