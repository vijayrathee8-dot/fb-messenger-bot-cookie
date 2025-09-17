module.exports = {
  name: "flip",
  description: "Flip a coin",
  execute(api, message) {
    api.sendMessage(Math.random() < 0.5 ? "Heads" : "Tails", message.threadID);
  }
};