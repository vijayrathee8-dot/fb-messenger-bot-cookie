module.exports = {
  name: "joke",
  description: "Get a random joke",
  execute(api, message) {
    const jokes = [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "What do you call cheese that isn't yours? Nacho cheese."
    ];
    api.sendMessage(jokes[Math.floor(Math.random() * jokes.length)], message.threadID);
  }
};