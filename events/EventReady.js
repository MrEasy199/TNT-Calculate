class EventReady {
  constructor() {
    this.event = 'ready';
    this.enabled = true;
  }

  async run() {
    this.Client.user.setStatus('online');
    this.Client.user.setActivity(`\'JGcalc help\'`, {type: "PLAYING"});
  }
}

module.exports = EventReady;
