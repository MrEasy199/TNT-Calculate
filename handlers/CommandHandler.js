const discord = require('discord.js');
const fs = require('fs');

class CommandHandler {
  constructor(Client) {
    this.Client = Client;

    global.Commands = new discord.Collection();
    global.Aliases = new discord.Collection();

    this.CommandLoader();
  }

  CommandLoader() {
    fs.readdir(`./commands`, (err, files) => {
    //
    if(err) return console.log(err);
    //
    let cmds = files.filter(f => f.split(".").pop() === "js");
    //
    cmds.forEach(f => {
        let command = require(`../commands/${f}`)
        //
        command = new command(this)
        Commands.set(command.name, command);
        console.log(`${command.category ?? "No category"} || Loaded ${f}`);
        //
        if(command.aliases) for (let alias of command.aliases) Aliases.set(alias, command.name);
    });
  });  
  }
}
module.exports = CommandHandler;
