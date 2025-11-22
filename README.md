# Industrial First Aid Guide

A simple, beautiful web app for common first aid procedures in industrial settings.

## Features
- **Bilingual**: English and Hindi support with one-click toggle
- **Beautiful Design**: Pastel color scheme with smooth animations and glow effects
- **No Server Required**: All data is embedded in JavaScript - just open `index.html` in any browser
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Easy to Update**: Simply edit the `firstAidData` object in `script.js` to add or modify content

## How to Use

### Option 1: Direct Open (Simplest)
Simply double-click `index.html` to open it in your default browser. No server needed!

### Option 2: Live Server (Recommended for development)
If you're using VS Code:
1. Install the "Live Server" extension
2. Right-click `index.html` and select "Open with Live Server"

## How to Add New First Aid Topics

1. Open `script.js`
2. Find the `firstAidData` object
3. Add a new entry in both `en` and `hi` arrays following this format:

```javascript
{
  id: 'unique-id',
  title: 'Topic Title',
  do: [
    'First do item',
    'Second do item'
  ],
  dont: [
    'First dont item',
    'Second dont item'
  ]
}
```

4. Save the file and refresh the browser

## Current Topics Covered
- Burns
- Eye Injuries
- Cuts & Wounds
- Electric Shock

## Technology Stack
- Pure HTML5
- CSS3 with animations and gradients
- Vanilla JavaScript (no frameworks)

Enjoy a safer workplace! 🏭✨
