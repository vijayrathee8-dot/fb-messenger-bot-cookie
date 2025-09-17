module.exports = {
  name: "groupid",
  description: "Get the group/thread ID",
  execute(api, message) {
    api.sendMessage("Group/Thread ID: " + message.threadID, message.threadID);
  }
};