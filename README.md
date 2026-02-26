# Developer Portfolio Website

A modern, fully-responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, developer-themed UI, and a contact form integrated with Telegram Bot.

## Features

- **Modern Design**: Clean, professional developer-style UI with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Three Pages**:
  - Home: Hero section with profile, skills, and call-to-action buttons
  - Projects: Showcase your work with animated project cards
  - Contact: Fully validated contact form with Telegram integration
- **Smooth Animations**: Fade-in, slide, typing effects, and hover animations
- **Resume Download**: One-click resume download functionality
- **Form Validation**: Client-side validation with error messages
- **Telegram Integration**: Contact form submissions sent directly to your Telegram

## Customization Guide

### 1. Personal Information

**Home Page** (`src/components/HomePage.tsx`):
- Line 30: Replace `Your Name` with your actual name
- Line 45: Update the description text
- Line 61-66: Modify the tech stack badges
- Line 81: Replace the profile image URL with your photo

**Contact Page** (`src/components/ContactPage.tsx`):
- Line 110: Update email address
- Line 111: Update phone number

### 2. Projects

Edit `src/components/ProjectsPage.tsx` (lines 6-58):
- Replace the sample projects with your actual projects
- Update titles, descriptions, images, technologies, and links
- Add or remove projects as needed

### 3. Resume

Replace `public/resume.pdf` with your actual resume file. Keep the filename as `resume.pdf` or update the path in `HomePage.tsx` (line 20).

### 4. Telegram Bot Setup

To enable contact form submissions via Telegram:

1. Create a Telegram bot:
   - Open Telegram and search for @BotFather
   - Send `/newbot` and follow the instructions
   - Copy your bot token

2. Get your Chat ID:
   - Start a chat with your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Look for the `chat` object and copy the `id` value

3. Update the contact form (`src/components/ContactPage.tsx`, lines 48-49):
   ```typescript
   const TELEGRAM_BOT_TOKEN = 'your_actual_bot_token_here';
   const TELEGRAM_CHAT_ID = 'your_actual_chat_id_here';
   ```

### 5. Colors and Styling

The portfolio uses a cyan/blue color scheme. To change colors:
- Primary accent: `cyan-400`, `cyan-500`, `cyan-600`
- Secondary: `blue-500`, `blue-600`
- Background: `gray-900`, `gray-800`

Search and replace these color classes throughout the component files.

### 6. Meta Tags

Update `index.html`:
- Line 7: Page title
- Lines 8-10: Social media preview images

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar with mobile menu
│   ├── HomePage.tsx        # Hero section and main landing
│   ├── ProjectsPage.tsx    # Projects showcase
│   └── ContactPage.tsx     # Contact form with validation
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main app with routing
└── index.css              # Custom animations and styles
```

## License

MIT License - Feel free to use this template for your own portfolio!
