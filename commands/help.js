exports.run = async (bot, message, args, ownerID, prefix, cmd, Discord) => {
	if(args.length < 2){
		const INVALID_USAGE = new Discord.RichEmbed()
		.setColor(`#ff0000`)
		.setTitle(`:warning: **Invalid Usage** :warning:`)
		.addField(`Please Use:`, `${prefix}help <category>`)
		.addBlankField(`**Avaliable Categories:**`)
		.addBlankField(` - General,\n - Owner,\n - Admin,\n - Fun,\n - Misc`)
		.setFooter(`[] = Optional, <> = Required`, LOGO);
	
		message.channel.send(INVALID_USAGE);
	} else {
		switch(args){
			case `owner`:
				if(message.author.id !== ownerID) return message.channel.reply("You Are Not The Creator Of This Bot, You Cannot Use This Category!");

				const ownerHelp = new Discord.RichEmbed()
				.setColor(`#11ff00`)
				.setTitle(`Owner Commands:`)
				.addField(`${prefix}leaveGuild [target] [delay (seconds))]`, `Makes The Bot Leave The Targetted Guild After The Specified Delay.`)
				.addField(`${prefix}eval <code>`, `Execute Code.`)
				.setFooter(`[] = Optional, <> = Required`, LOGO);

				message.channel.send(`:white_check_mark: Check Your DMs.`);
				message.author.send(ownerHelp);
			break;
			case `admin`:
				if(!message.member.hasPermission("ADMINISTRATOR")) 
				return message.reply(`You're Not An Administrator`);

				const adminHelp = new Discord.RichEmbed()
				.setColor(`#11ff00`)
				.setTitle(`Admin Commands:`)
				.addField(`${prefix}poll <question>`, `Automatically Adds Reactions For Voting.`)
				.addField(`${prefix}say <message>`, `Speak From The Bots\' Perspective.`)
				.addField(`${prefix}tsay <target> <message>`, `Speak From The Bots\' Perspective In The Targetted Channel.`)
				.setFooter(`[] = Optional, <> = Required`, LOGO);

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
