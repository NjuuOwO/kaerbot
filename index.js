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
	
	if(msg.content == '!!ping') return msg.reply('pong');

	if(msg.content == '!!avatar') return msg.reply(msg.author.displayAvatarURL({format: "png", dynamic: true, size: 4096}));


	if(msg.content === '!!help'){
		const helpembed = new MessageEmbed()
		.setTitle('Komendy')
		.setColor('#00FFFF')
		.setDescription('test');
		msg.channel.send(helpembed);
	}
});


bot.login(token)