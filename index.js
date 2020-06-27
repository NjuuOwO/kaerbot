const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = require('./config.json');
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
	if(msg.channel.id != "725340463782953072" || !msg.content.startsWith("!!") || msg.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	
	
	
	if(msg.content.toLowerCase() == '!!ping') return msg.reply('pong')
	if(msg.content.toLowerCase() == '!!avatar') return msg.reply(msg.author.displayAvatarURL({format: "png", dynamic: true, size: 4096}));

	if(msg.content.toLowerCase() == '!!pkn'){
		if(!args[0]) return message.reply("Nie rozpoznaję tego znaku. Wybierz kamień, papier lub nożyce!");
		let pkn = ["papier", "kamień", "nożyce"];
		let botpkn = Math.floor((Math.random() * pkn.length))


		if(args[0].toLowerCase() == "papier"){
			if(pkn[botpkn] == "papier") return message.reply("Wybrałem papier :raised_back_of_hand: REMIS!");
			if(pkn[botpkn] == "kamień") return message.reply("Wybrałem kamień :right_facing_fist: Wygrałeś!");
			if(pkn[botpkn] == "nożyce") return message.reply("Wybrałem nożyce :v: Wygrałem!");
		}

		if(args[0].toLowerCase() == "kamień"){
			if(pkn[botpkn] == "papier") return message.reply("Wybrałem papier :raised_back_of_hand: Wygrałem!");
			if(pkn[botpkn] == "kamień") return message.reply("Wybrałem kamień :right_facing_fist: REMIS!");
			if(pkn[botpkn] == "nożyce") return message.reply("Wybrałem nożyce :v: Wygrałeś!");
		
		if(args[0].toLowerCase() == "nożyce"){
			if(pkn[botpkn] == "papier") return message.reply("Wybrałem papier :raised_back_of_hand: Wygrałeś!");
			if(pkn[botpkn] == "kamień") return message.reply("Wybrałem kamień :right_facing_fist: Wygrałem!");
			if(pkn[botpkn] == "nożyce") return message.reply("Wybrałem nożyce :v: REMIS!");
		}}
	}
	
	
	if(msg.content.toLowerCase() == '!!help'){
		let helpembed = new Discord.MessageEmbed()
		.setTitle('Komendy')
		.setColor('#00FFFF')
		.addField("!!help", 'Pokazuje komendy')
		.addField("!!avatar", 'Pokazuje twój avatar')
		.addField("!!ping", 'Pong')
		.addField("!!pkn <papier/kamień/nożyce", 'Gra w papier, kamień, nożyce');
		
		msg.channel.send(helpembed);
	}
});


bot.login(token)