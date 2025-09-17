module.exports = {
  name: "auto",
  description: "Auto-reply bot is enabled!",
  execute(api, message) {
    api.sendMessage("Auto-reply mode is ON!", message.threadID);
  }
};