require('dotenv').config();
const login = require('facebook-chat-api');
const fs = require('fs');
const path = require('path');

const ADMIN_UIDS = process.env.ADMIN_UIDS ? process.env.ADMIN_UIDS.split(',') : [];

const commands = {};
const commandsDir = path.join(__dirname, 'commands');
fs.readdirSync(commandsDir).forEach(file => {
  if (file.endsWith('.js')) {
    const cmd = require(path.join(commandsDir, file));
    commands[cmd.name] = cmd;
  }
});

login({appState: JSON.parse(process.env.FB_COOKIE)}, (err, api) => {
  if (err) return console.error(err);

  api.setOptions({ listenEvents: true, selfListen: false });

  api.listenMqtt((err, message) => {
    if (err) return console.error(err);

    if (message.type !== "message" || !message.body) return;

    if (message.body.startsWith('!')) {
      const args = message.body.slice(1).trim().split(/ +/g);
      const commandName = args.shift().toLowerCase();

      if (commands[commandName]) {
        const isAdmin = ADMIN_UIDS.includes(message.senderID);
        commands[commandName].execute(api, message, args, isAdmin);
      }
    }
  });
});

module.exports = { commands };