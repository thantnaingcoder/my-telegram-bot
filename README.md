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

## Production Deployment on Render

### 1. Prepare for Deployment

1. Make sure your code is pushed to a GitHub repository
2. Create an account on [Render](https://render.com/) if you don't have one

### 2. Deploy to Render

1. In the Render dashboard, click "New" and select "Web Service"
2. Connect your GitHub repository
3. Configure the web service:
   - **Name**: Your bot name (e.g., "my-telegram-bot")
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm run prod`
   - **Plan**: Free (or select a paid plan for better performance)

### 3. Set Environment Variables

In the Render dashboard, add the following environment variables:

```
TELEGRAM_BOT_TOKEN=your_bot_token
WEBHOOK_URL=https://your-app-name.onrender.com/webhook
NODE_ENV=production
PORT=10000
```

### 4. Set Up the Webhook

After your bot is deployed, register the webhook with Telegram by visiting:

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-app-name.onrender.com/webhook
```

Replace `<YOUR_BOT_TOKEN>` with your actual bot token and `your-app-name` with your Render app name.

### 5. Verify Webhook Setup

Check if your webhook is properly set by visiting:

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
```

You should see a response confirming that your webhook is active and pointing to your Render URL.

## License

ISC
