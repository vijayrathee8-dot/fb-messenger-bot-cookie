module.exports = {
  name: "roll",
  description: "Roll a dice",
  execute(api, message) {
    const roll = Math.floor(Math.random() * 6) + 1;
    api.sendMessage("🎲 You rolled a " + roll, message.threadID);
  }
};