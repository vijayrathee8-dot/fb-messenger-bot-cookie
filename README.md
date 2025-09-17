# Facebook Messenger Public Bot (Mirai/GotBot Style)

A Messenger bot with 20+ ready-to-use commands (admin/public), easily extendable, modular and inspired by Mirai/GotBot.

## Features

- 20+ popular/fun/admin commands out of the box
- Public reply (sabko reply deta hai, jaise Mirai/GotBot)
- Admin commands (ban, unban, shutdown, etc. — multi admin support)
- Modular command system (add/edit/delete commands easily)
- Easy setup (.env file, npm install)
- Open-source, customize as you want!

## Setup

1. Clone this repo.
2. `npm install`
3. Copy `.env.example` to `.env` and add your FB_COOKIE (appState JSON, one line) and ADMIN_UIDS (comma separated UIDs).
4. `npm start`

## Commands

- !ping, !help, !time, !quote, !joke, !meme, !roll, !flip, !welcome, !goodbye, !admins, !groupid, !uid, !credit, !love, !auto, !echo, !sticker, !ban, !unban, !shutdown

You can easily add more by making new `.js` files in the `commands/` folder!

## Security

- Never share your FB_COOKIE or .env file publicly.
- Use only on test/alt accounts for safety.

---

**Enjoy your new Messenger bot!**
