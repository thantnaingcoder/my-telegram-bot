// Import required packages
require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const axios = require('axios');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Telegram bot
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Set up webhook for production (uncomment when deploying)
// const WEBHOOK_URL = 'your-webhook-url';
// bot.telegram.setWebhook(WEBHOOK_URL);
// app.use(bot.webhookCallback('/webhook'));

// Basic bot commands
bot.start((ctx) => {
  ctx.reply('Welcome to my personal Telegram bot! 👋\nI\'m GG, a developer based in Myanmar.\nType /help to see available commands or /bio to learn more about me.');
});

bot.help((ctx) => {
  ctx.reply(
    'Available commands:\n' +
    '/start - Start the bot\n' +
    '/help - Show this help message\n' +
    '/bio - Learn about me\n' +
    '/skills - See my technical skills\n' +
    '/contact - Get my contact information\n' +
    '/projects - View my portfolio projects\n' +
    '/status - Check bot status\n' +
    '/echo [message] - Echo back your message'
  );
});

bot.command('bio', (ctx) => {
  ctx.reply('👨‍💻 About Me\n\nHi, I\'m ThantNaing!\n\nI\'m a developer from Myanmar with a passion for creating innovative solutions. I enjoy working with modern technologies and building applications that solve real-world problems.\n\nUse /skills to see my technical expertise or /contact to get in touch!');
});

bot.command('skills', (ctx) => {
  ctx.reply('🛠️ My Technical Skills:\n\n• Frontend: HTML, CSS, JavaScript, React\n• Backend: Node.js, Express\n• Databases: MongoDB, MySQL\n• Other: Git, RESTful APIs, Telegram Bot Development\n\nI\'m constantly learning and expanding my skillset!');
});

bot.command('contact', (ctx) => {
  ctx.reply('📱 Contact Information:\n\nEmail: gg@example.com\nGitHub: github.com/gg-dev\nLinkedIn: linkedin.com/in/gg-dev\n\nFeel free to reach out for collaborations or opportunities!');
});

bot.command('projects', (ctx) => {
  ctx.reply('🚀 My Projects:\n\n1. Personal Telegram Bot - A customized bot built with Node.js and Telegraf\n2. E-commerce Platform - Full-stack web application with React and Express\n3. Task Management System - Productivity tool with user authentication\n\nAsk me for more details about any specific project!');
});

bot.command('status', (ctx) => {
  ctx.reply('Bot is up and running! ✅ Ready to assist you!');
});

bot.command('echo', (ctx) => {
  const message = ctx.message.text.split(' ').slice(1).join(' ');
  if (message) {
    ctx.reply(`You said: ${message}`);
  } else {
    ctx.reply('Please provide a message to echo. Example: /echo Hello from Myanmar!');
  }
});

// Example feature: Weather command
bot.command('weather', async (ctx) => {
  const city = ctx.message.text.split(' ').slice(1).join(' ');
  if (!city) {
    return ctx.reply('Please provide a city name. Example: /weather London');
  }
  
  ctx.reply(`Searching weather for ${city}...`);
  
  // Note: In a real application, you would use a weather API like OpenWeatherMap
  // This is just a placeholder response
  ctx.reply(`Weather forecast for ${city}:\nTemperature: 22°C\nCondition: Partly Cloudy\nHumidity: 65%`);
});

// Handle text messages
bot.on('text', (ctx) => {
  // Respond to messages that aren't commands
  if (!ctx.message.text.startsWith('/')) {
    ctx.reply(`You said: ${ctx.message.text}\n\nType /help to see available commands.`);
  }
});

// Error handling
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('Oops! Something went wrong. Please try again later.');
});

// Start Express server
app.get('/', (req, res) => {
  res.send('Telegram Bot Server is running!');
});

// Start bot
if (process.env.NODE_ENV === 'production') {
  // Webhook mode for production
  console.log('Bot is running in webhook (production) mode');
} else {
  // Polling mode for development
  console.log('Bot is running in polling (development) mode');
  bot.launch();
}

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Start Express server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
