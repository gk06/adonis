const Discord = require("discord.js");
const chalk = require('chalk');
const config = require("../../config");

module.exports = (client) => {
 try {
 
  
  client.user.setStatus("online");

  console.log(chalk.blue("Connected! Logged in as ") + chalk.blue.underline(`${client.user.username}`) + chalk.blue("!")); // ${client.user.tag}
 } catch(err) {
  console.log(err);
 }
}
