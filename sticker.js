module.exports = {
  name: "sticker",
  description: "Send a sticker (placeholder)",
  execute(api, message) {
    api.sendMessage("Sorry, sticker sending is a placeholder in this demo bot.", message.threadID);
  }
};