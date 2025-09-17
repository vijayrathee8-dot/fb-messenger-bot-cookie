module.exports = {
  name: "meme",
  description: "Send a random meme",
  execute(api, message) {
    const memes = [
      "https://i.imgflip.com/30b1gx.jpg",
      "https://i.imgflip.com/1bij.jpg",
      "https://i.imgflip.com/26am.jpg"
    ];
    api.sendMessage({ attachment: memes[Math.floor(Math.random() * memes.length)] }, message.threadID);
  }
};