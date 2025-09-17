module.exports = {
  name: "echo",
  description: "Repeat your message",
  execute(api, message, args) {
    if (!args.length) return api.sendMessage("Usage: !echo [text]", message.threadID);
    api.sendMessage(args.join(" "), message.threadID);
  }
};