const botconf = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();




fs.readdir("./komendy/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Nie udało się załadować komend.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${i}. Komenda ${f} wczytała się pomyślnie!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async () => {
  console.log(`------------------------------------------------------------------------`);
  console.log(`Kaer BOT pomyślnie się połączył!`);
  console.log(`------------------------------------------------------------------------`);
  bot.user.setActivity("Grand Theft Auto San Andreas");
});



bot.on("msg", async message => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

   if(!prefixes[msg.guild.id]){
     prefixes[msg.guild.id] = {
       prefixes: botconf.prefix
     };
   }

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if(prefix == cmd.slice(0,1)){
   let commandFile = bot.commands.get(cmd.slice(prefix.length));
   if(commandFile) commandFile.run(bot,msg,args);
  };
});

