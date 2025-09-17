module.exports = {
  name: "unban",
  description: "Unban a user (admin only)",
  adminOnly: true,
  execute(api, message, args) {
    if (!args.length) return api.sendMessage("Usage: !unban [uid]", message.threadID);
    api.sendMessage("User unbanned (demo, not really) UID: " + args[0], message.threadID);
  }
};