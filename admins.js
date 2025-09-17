module.exports = {
  name: "admins",
  description: "List all admins",
  execute(api, message, args, event) {
    api.getThreadInfo(message.threadID, (err, info) => {
      if (err) return api.sendMessage("Error fetching admins.", message.threadID);
      const admins = info.adminIDs.map(a => a.id).join(", ");
      api.sendMessage("Admins: " + admins, message.threadID);
    });
  }
};