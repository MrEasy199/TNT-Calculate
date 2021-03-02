module.exports = {
  name: "eval",
  description: "Runs JavaScript",
  category: "Developer",
  aliases: [""],
  execute(message, args) {
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/'/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }

    let code = args.join(' ');
    if(!code) return message.channel.send('Please specify JS code to run.');
    try {
      let result = eval(code);

      if(typeof result !== 'string') result = require('util').inspect(result);
      if(code.includes(this.Client.token)) return message.channel.send('Not allowed.');

      let embed = new Discord.MessageEmbed().setColor('BLUE')
          .setTitle('JavaScript Eval')
          .addField(`**Input:** \`${args.join(" ")}\``, '_ _')
          .addField(`**Output:** \`\`\`${clean(result)}\`\`\``, '_ _')
      message.channel.send(embed);
    } catch(err) {
      let embed = new Discord.MessageEmbed().setColor('RED')
            .setTitle("An error has occured!")
            .addField(`**Error:** \`\`\`${clean(err)}\`\`\``, '_ _')
      message.channel.send(embed);
    }
  }
};
