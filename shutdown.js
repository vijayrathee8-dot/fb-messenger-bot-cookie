module.exports = {
  name: "shutdown",
  description: "Shutdown the bot (admin only)",
  adminOnly: true,
  execute(api, message) {
    api.sendMessage("Bot shutting down... (demo, not really)", message.threadID);
    process.exit(0);
  }
};