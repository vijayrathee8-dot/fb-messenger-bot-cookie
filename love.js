module.exports = {
  name: "love",
  description: "Send a love message",
  execute(api, message) {
    api.sendMessage("❤️ Sending love to everyone!", message.threadID);
  }
};