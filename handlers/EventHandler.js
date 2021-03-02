const fs = require('fs');

class EventHandler {
  constructor(Client) {
    this.Client = Client;
    this.EventLoader();
  }

  EventLoader() {
    fs.readdir('./events', (err, files) => {
      if (err) throw new Error(err);

      let Filter = files.filter(f => f.split(".").pop() === 'js');

      for (let f of files) {
        let event = require(`../events/${f}`);
        event = new event();

        if(!event.enabled) continue;
        this.Client.on(event.event, event.run.bind(this));
        
        console.log(`[INFO]: Loaded Event: ${f}`)
      }
    });
  }
}

module.exports = EventHandler;
