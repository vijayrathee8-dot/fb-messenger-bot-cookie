module.exports = {
  name: "ping",
  description: "Check if the bot is online",
  execute(api, message) {
    api.sendMessage("Pong!", message.threadID);
  }
};