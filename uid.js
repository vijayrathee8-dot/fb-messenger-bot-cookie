module.exports = {
  name: "uid",
  description: "Get your Facebook user ID",
  execute(api, message) {
    api.sendMessage("Your user ID: " + message.senderID, message.threadID);
  }
};