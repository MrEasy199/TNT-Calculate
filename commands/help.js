const discord = require("discord.js");
const index = require(`../index.js`);

const INVALID_USAGE = new discord.RichEmbed()
  .setColor(`#ff0000`)
  .setTitle(`:warning: **Invalid Usage** :warning:`)
  .addField(`Please Use:`, `${index.PREFIX}help <category>`)
  .addBlankField(`**Avaliable Categories:**`)
  .addBlankField(` - General,\n - Barrels,\n - Issues,\n - Physics,\n - Constants,\n - Admin`)
  .setFooter(`[] = Optional, <> = Required`, index.CLIENT.user.avatarURL);

const ADMIN_HELP = new discord.RichEmbed()
  .setColor(`#11ff00`)
  .setTitle(`Admin Commands:`)
  .addField(`${index.PREFIX}eval <javascript>`, `${}`)
  .setFooter(`[] = Optional, <> = Required`, index.CLIENT.user.avatarURL);



module.exports = {
  name: "help",
  description: "Displays all help messages",
  category: "general",
  aliases: [""],
  execute(message, args) {
    if(args.length == 0) {
      message.channel.send(INVALID_USAGE);
    } else {
      switch(args) {
        case `developer`:
          if(!message.member.hasPermission("ADMINISTRATOR")) 
          return message.reply(`You're Not An Administrator`);

          message.channel.send(`:white_check_mark: Check Your DMs.`);
          message.author.send(adminHelp);
        break;
        case `fun`:
          const funHelp = new Discord.RichEmbed()
          .setColor(`#00ffff`)
          .setTitle(`Fun Commands:`)
          .addField(`Wait!`, `This Category Is Unavaliable...`)
          .setFooter(`[] = Optional, <> = Required`, LOGO);
  
          message.channel.send(funHelp);
        break;
        case `misc`:
          const miscHelp = new Discord.RichEmbed()
          .setColor(`#00ffff`)
          .setTitle(`Misc Commands:`)
          .addField(`Wait!`, `This Category Is Unavaliable...`)
          .setFooter(`[] = Optional, <> = Required`, LOGO);
  
          message.channel.send(miscHelp);
        break;
        case `general`:
          const generalHelp = new Discord.RichEmbed()
          .setColor(`#00ffff`)
          .setTitle(`General Commands:`)
          .addField(`Wait!`, `This Category Is Unavaliable...`)
          .setFooter(`[] = Optional, <> = Required`, LOGO);
  
          message.channel.send(generalHelp);
        break;
        default:
          message.channel.send(INVALID_USAGE);
      }
    }
  }
};
