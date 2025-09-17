module.exports = {
  name: "ban",
  description: "Ban a user (admin only)",
  adminOnly: true,
  execute(api, message, args) {
    if (!args.length) return api.sendMessage("Usage: !ban [uid]", message.threadID);
    api.sendMessage("User banned (demo, not really) UID: " + args[0], message.threadID);
  }
};