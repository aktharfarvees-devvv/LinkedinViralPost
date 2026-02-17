# LinkedIn Prompt Generator Mobile App

A lightning-fast mobile app for generating LinkedIn content using predefined prompts. No database required.

## Features

✅ **4 Prompt Types:**
- LinkedIn Post Title Generator
- Comment Reply Generator
- AI Image Prompt Creator
- Complete LinkedIn Post Generator

✅ **User-Friendly Interface:**
- Simple 3-step workflow (Select → Input → Copy)
- One-click copy to clipboard
- Clean, mobile-optimized design

✅ **Fast & Lightweight:**
- No database
- Minimal dependencies
- Expo-based (easiest deployment)

## Tech Stack

- **React Native** - Cross-platform mobile
- **Expo** - Development & deployment framework
- **expo-clipboard** - One-click copy feature

## Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Quick Start

1. **Clone/Navigate to project:**
   ```bash
   cd "c:\Users\junai\OneDrive\Desktop\Linkedin\APK"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   expo start
   ```

4. **Run on your device:**
   - **Android:** Press `a` in terminal or scan QR code with Expo app
   - **iOS:** Press `i` in terminal or scan QR code with iOS Camera
   - **Web:** Press `w` in terminal

## Project Structure

```
APK/
├── App.js                    # Main app component
├── prompts.js               # All predefined prompts
├── package.json             # Dependencies
├── app.json                 # Expo configuration
├── babel.config.js          # Babel config
└── README.md               # This file
```

## How to Use

1. **Select a Prompt Type** - Choose from 4 options
2. **Enter Your Information** - Paste or type your content
3. **Generate Output** - App processes with predefined prompt
4. **Copy & Use** - One-click copy to clipboard

## Prompt Types Explained

### 1. LinkedIn Post Title
Generates scroll-stopping titles using AI + Software Engineering focus
- Input: Your main idea or topic
- Output: A compelling title (max 14 words)

### 2. Comment Reply
Strategic LinkedIn comment responses
- Input: The comment you want to reply to
- Output: Professional, engaging reply (3-6 lines)

### 3. Image Prompt
Professional image generation prompts for DALL-E, Midjourney, etc.
- Input: Your post theme or concept
- Output: Detailed image prompt for AI tools

### 4. Complete Post
Full viral LinkedIn posts ready to publish
- Input: Your main message or story
- Output: Complete formatted post with hook, bullets, and CTA

## Integrating with LLM APIs

Currently, the app processes prompts locally. To add real AI generation:

### Option 1: OpenAI API
```javascript
import axios from 'axios';

const generateWithOpenAI = async (prompt) => {
  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  }, {
    headers: { Authorization: `Bearer ${YOUR_API_KEY}` }
  });
  return response.data.choices[0].message.content;
};
```

### Option 2: Anthropic Claude
```javascript
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();
const message = await client.messages.create({
  model: 'claude-3-sonnet-20240229',
  max_tokens: 1024,
  messages: [{ role: 'user', content: prompt }],
});
```

Add to `App.js` `handleGenerateOutput()` function.

## Building for Production

### Android APK
```bash
eas build --platform android
```

### iOS App
```bash
eas build --platform ios
```

### Web Deployment
```bash
expo export --platform web
# Deploy the 'dist' folder to any hosting
```

## Customization

### Add New Prompts
Edit `prompts.js`:
```javascript
MY_PROMPT: {
  name: "My Custom Prompt",
  description: "What it does",
  template: `Your prompt template here with {{USER_INPUT}}`
}
```

### Customize Colors
Edit `App.js` `styles` object:
- Primary color: `#0a66c2` (LinkedIn blue)
- Success: `#28a745`
- Warning: `#ffc107`

### Change UI Text
All text is in `App.js` - easy to customize for other platforms

## Performance Tips

- App runs entirely on-device (no server delay)
- Clipboard copy is instant
- UI is optimized for low-end Android phones

## Troubleshooting

### Dependencies won't install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Expo won't start
```bash
expo doctor
npm install -g expo-cli@latest
```

### Clipboard not working
- Ensure `expo-clipboard` is installed
- On Android, grant clipboard permissions

## Future Enhancements

- [ ] Add more prompt templates
- [ ] Save favorite outputs locally
- [ ] Dark mode support
- [ ] Template customization in app
- [ ] LLM API integration options
- [ ] History management with async storage
- [ ] Share directly to LinkedIn
- [ ] Batch processing multiple prompts

## License

MIT

## Support

For issues or questions, check the Expo documentation: https://docs.expo.dev/

---

**Built with ❤️ for LinkedIn creators & engineers**
