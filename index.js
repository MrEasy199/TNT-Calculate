const { prefix, token } = require('./config.json');

const discord = require('discord.js'); const client = new discord.Client();
const logo = client.displayAvatarURL;

client.login(token);

// const CommandHandler = require(`./handlers/CommandHandler`);
// new CommandHandler();

const EventHandler = require(`./handlers/EventHandler`);
new EventHandler(client);

module.exports.Client = client;
