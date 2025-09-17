module.exports = {
  name: "goodbye",
  description: "Send a goodbye message",
  execute(api, message) {
    api.sendMessage("Goodbye! 👋", message.threadID);
  }
};