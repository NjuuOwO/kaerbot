const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const { prefix } = require('./config.json');
const token = process.env.token;


bot.on("ready", () => {
	console.log(` `);
	console.log(`Kaer BOT pomyślnie się połączył!`);
	console.log(`Prefix: !!`);
	// bot.sendMessage('196934488628920320', 'Żyję! :D');

	bot.user.setPresence({
		status: 'dnd',
		activity: {
			name: 'Grand Theft Auto San Andreas',
			type: 'PLAYING',
		}
	})
});


bot.on('message', msg => {
	const args = msg.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	if(msg.author.bot) return;

	if(msg.channel.id != "725340463782953072" && msg.content.startsWith(prefix) && !msg.member.hasPermission("ADMINISTRATOR")) {
		msg.delete();
		msg.reply("<#725340463782953072>").then(msg => msg.delete({timeout: 5000}));
	}

	if(cmd == 'ping'){
		let time = (new Date().getTime() - msg.createdTimestamp + "ms");
		msg.channel.send("Pong! :timer: " + time);
	}


	if(cmd == 'avatar' || cmd == 'awatar') {
		let pingeduser = msg.mentions.users.first() || msg.author;

		msg.channel.send(pingeduser.displayAvatarURL({format: "png", dynamic: true, size: 4096}));
	}


	if(cmd == 'pkn'){
		if(!args[0]) return msg.reply("Nie rozpoznaję tego znaku. Wybierz kamień, papier lub nożyce!");
		let pkn = ["papier", "kamień", "nożyce"];
		let botpkn = Math.floor((Math.random() * pkn.length))


		if(args[0].toLowerCase() == "papier"){
			if(pkn[botpkn] == "papier") return msg.reply("Wybrałem papier :raised_back_of_hand: REMIS!");
			if(pkn[botpkn] == "kamień") return msg.reply("Wybrałem kamień :right_facing_fist: Wygrałeś!");
			if(pkn[botpkn] == "nożyce") return msg.reply("Wybrałem nożyce :v: Wygrałem!");
		}

		if(args[0].toLowerCase() == "kamień"){
			if(pkn[botpkn] == "papier") return msg.reply("Wybrałem papier :raised_back_of_hand: Wygrałem!");
			if(pkn[botpkn] == "kamień") return msg.reply("Wybrałem kamień :right_facing_fist: REMIS!");
			if(pkn[botpkn] == "nożyce") return msg.reply("Wybrałem nożyce :v: Wygrałeś!");
		}

		if(args[0].toLowerCase() == "nożyce"){
			if(pkn[botpkn] == "papier") return msg.reply("Wybrałem papier :raised_back_of_hand: Wygrałeś!");
			if(pkn[botpkn] == "kamień") return msg.reply("Wybrałem kamień :right_facing_fist: Wygrałem!");
			if(pkn[botpkn] == "nożyce") return msg.reply("Wybrałem nożyce :v: REMIS!");
		}
	}


	if(cmd == "bot"){
		let botavatar = bot.user.displayAvatarURL;
		let botinfo_embed = new Discord.MessageEmbed()
		.setDescription("**Informacje o njuBocie**")
		.setColor("#15f153")
		.setThumbnail(botavatar)
		.addField("Nazwa bota", bot.user.username)
		.addField("Stworzony", bot.user.createdAt)
		.addField("Biblioteka", 'discord.js');
		return msg.channel.send(botinfo_embed);
	}


	if(cmd == 'help' || cmd == 'cmd' || cmd == 'komendy'){
		let help_embed = new Discord.MessageEmbed()
		.setTitle('Komendy')
		.setColor('#00FFFF')
		.addField("!!help, cmd, komendy", 'Pokazuje komendy')
		.addField("!!avatar", 'Pokazuje twój avatar')
		.addField("!!bot", 'Wyświetla informacje o bocie')
		.addField("!!ping", 'Pong')
		.addField("!!pkn <papier/kamień/nożyce>", 'Gra w papier, kamień, nożyce');

		msg.channel.send(help_embed);
		return
	}

	if(msg.channel.id('722073237105672202')){
		if(cmd == "cc"){
	    let wlasnyKolor = msg.member.roles.cache.find(guild => guild.name === msg.author.username);
			// if(!wlasnyKolor) return msg.channel.send("Nie posiadasz wlasnego koloru!");
	     if(!wlasnyKolor) return msg.channel.send("<@363329962717216777> dodaj hlopu kolor xd");

			if(!args[0]) return msg.channel.send("Wprowadż poprawny kolor hex (#ffffff) lub usuń");
			if(args[0].toLowerCase() == "usun" || args[0].toLowerCase() == "usuń") { wlasnyKolor.delete(); msg.channel.send("Usunięto!"); return;}
			if(args[0].length != 7) return msg.channel.send("Wprowadż poprawny kolor hex (#ffffff)");
	    if(args[0].length == 7) { wlasnyKolor.edit({ color: args[0] }); msg.channel.send("Zmieniono!"); }
	}

});


bot.login(token)
