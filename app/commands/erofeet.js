const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "erofeet",
 aliases: [],
 description: "Display a random ero feet image/gif",
 category: "NSFW",
 usage: "erofeet",
 run: async (client, message, args) => {
  if (!message.channel.nsfw) {
   message.react('💢');
   return message.channel.send({embed: {
    color: 16734039,
    description: "You can use this command in an NSFW Channel!"
   }})
  }
  (async () => {
   try {
    const response = await fetch("https://nekos.life/api/v2/img/erofeet")
    const body = await response.json();
    const embed = new Discord.MessageEmbed()
     .setTitle(":smirk: Ero!", message.guild.iconURL({ dynamic: true, format: 'png'}))
     .setImage(body.url)
     .setColor("RANDOM")
     .setFooter("Requested by " + `${message.author.username}` + " • (😏)", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
     .setTimestamp()
     .setURL(body.url);
    message.channel.send(embed);
   } catch(err) {
    message.channel.send({embed: {
     color: 16734039,
     description: "Something went wrong... :cry:"
    }})
   }
  })();
 }
}
