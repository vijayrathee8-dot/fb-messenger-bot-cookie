module.exports = {
  name: "credit",
  description: "Show bot creator credits",
  execute(api, message) {
    api.sendMessage("Bot by vijayrathee8-dot, powered by facebook-chat-api.", message.threadID);
  }
};