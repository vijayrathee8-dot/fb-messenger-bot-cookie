module.exports = {
  name: "quote",
  description: "Get a random quote",
  execute(api, message) {
    const quotes = [
      "The best way to predict the future is to invent it.",
      "Stay hungry, stay foolish.",
      "Life is what happens when you're busy making other plans.",
      "Do or do not. There is no try."
    ];
    api.sendMessage(quotes[Math.floor(Math.random() * quotes.length)], message.threadID);
  }
};