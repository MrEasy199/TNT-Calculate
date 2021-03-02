const discord = require('discord.js');
const fs = require('fs');
const index = require(`../index.js`);

class CommandHandler {
  constructor(client) {
    this.client = index.CLIENT;

    client.commands = new discord.Collection();
    client.Aliases = new discord.Collection();

    this.CommandLoader();
  }

  CommandLoader() {
    const files = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

    for (const file of files) {
      const command = require(`../commands/${file}`);
      this.client.commands.set(command.name, command);
    }
  }
};

index.CLIENT.on(`message`, async message => {
  if (!message.content.toLowerCase().startsWith(index.PREFIX)) return;

  let command = message.content.slice(index.PREFIX.length).trim().split(' ').slice(0).shift().toLowerCase();
  let args = message.content.slice(index.PREFIX.length+command.length).trim().split(' ')

  try {
    module.exports.message = message;
    
    index.CLIENT.commands.get(command).execute(message, args);
  } catch(err) {
    console.log(`[WARN/ERROR]:\n ${err}`);
  } finally {
    console.log(`[INFO]:\n  User: ${message.author.username}#${message.author.discriminator}\n  Command: ${command}\n  Args: ${args.join(" ")}`);
  }
});

module.exports = CommandHandler;
