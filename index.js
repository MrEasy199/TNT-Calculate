// // Configuration
const { PREFIX, DIVIDER, WARN_DIVIDER } = require('./config.json');
const { TOKEN } = require(`./token.json`);

const DISCORD = require('discord.js');
const CLIENT = new DISCORD.Client();

// // Exports
module.exports.CLIENT = CLIENT;
module.exports.PREFIX = PREFIX;

// // Initialisation
// X=-=-=-=-=x=-=-=-=-=xXx=-=-=-=-=x=-=-=-=-=X

// will fix these to say what they're doing as it's happening instead of all at the start

console.log(`[INFO]: Loading Discord Client...`);
sleep(100);
console.log(`[INFO]: Connecting To Discord...`);
sleep(100);
console.log(`[INFO]: Loading Configurations...`);
sleep(100);
console.log(`[INFO]: Loading Events...`);
sleep(100);
console.log(`[INFO]: Loading Commands...`);
sleep(100);
// X=-=-=-=-=x=-=-=-=-=xXx=-=-=-=-=x=-=-=-=-=X

// discord.js
// X=-=-=-=-=x=-=-=-=-=xXx=-=-=-=-=x=-=-=-=-=X
const CommandHandler = require('./handlers/CommandHandler.js');
new CommandHandler(CLIENT);

const EventHandler = require('./handlers/EventHandler');
new EventHandler();

CLIENT.login(TOKEN).catch(err => console.log(`\n\n${WARN_DIVIDER}\n[ERROR]: Failed Loading Client... Could The Token Be Wrong?\n${WARN_DIVIDER}`));
// X=-=-=-=-=x=-=-=-=-=xXx=-=-=-=-=x=-=-=-=-=X

// // Extra Functions
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
