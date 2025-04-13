# Telegram Bot with Node.js and Express

A simple Telegram bot built with Node.js and Express.js that can be integrated with your Telegram account.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- A Telegram account
- A Telegram Bot Token (obtained from BotFather)

## Setup Instructions

### 1. Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather and send the command `/newbot`
3. Follow the instructions to create a new bot
4. Once created, BotFather will provide you with a **token**. Save this token as you'll need it later.

### 2. Configure the Bot

1. Open the `.env` file in the project root
2. Replace `your_telegram_bot_token_here` with the token received from BotFather:
   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
   PORT=3000
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Bot

```bash
node index.js
```

## Available Commands

Once your bot is running, you can interact with it using these commands:

- `/start` - Start the bot
- `/help` - Show help message with available commands
- `/status` - Check if the bot is running
- `/echo [message]` - Echo back your message
- `/weather [city]` - Get weather information for a city (example feature)

## Customizing Your Bot

You can extend the bot's functionality by adding more commands and features in the `index.js` file.

## Deployment (Optional)

For production deployment, uncomment the webhook section in `index.js` and set your webhook URL.

## License

ISC
