module.exports = {
  name: "time",
  description: "Get the current time",
  execute(api, message) {
    api.sendMessage("Current time: " + new Date().toLocaleString(), message.threadID);
  }
};