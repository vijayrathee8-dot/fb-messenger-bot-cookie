const fs = require('fs');
const path = require('path');

module.exports = {
  name: "help",
  description: "Show all commands",
  execute(api, message) {
    const commandsDir = path.join(__dirname);
    const commandFiles = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js'));
    let helpMsg = "Available commands:\n";

    commandFiles.forEach(cmdFile => {
      const cmd = require(path.join(commandsDir, cmdFile));
      if (cmd.name) helpMsg += `!${cmd.name} - ${cmd.description || ""}\n`;
    });

    api.sendMessage(helpMsg.trim(), message.threadID);
  }
};