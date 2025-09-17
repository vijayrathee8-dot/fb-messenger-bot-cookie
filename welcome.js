module.exports = {
  name: "welcome",
  description: "Send a welcome message",
  execute(api, message) {
    api.sendMessage("Welcome to the group! 🎉", message.threadID);
  }
};