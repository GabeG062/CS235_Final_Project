# 🎮 Game Hub — Expo SDK 54

A beginner-friendly React Native app with four mini-game screens.
Built with Expo SDK 54, Expo Router v4, and React Native StyleSheet.

---

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npx expo start

# 3. Connect
#    - Press 'i' for iOS simulator
#    - Press 'a' for Android emulator
#    - Scan the QR code with Expo Go on your phone
#    - If QR doesn't work on your network: npx expo start --tunnel
```

---

## 📁 File Structure

```
app/
  _layout.js          ← Root layout (Stack navigator)
  index.js            ← Home screen — shows all game cards
  game/
    tictactoe.js      ← Tic-Tac-Toe board layout
    minesweeper.js    ← Minesweeper grid layout
    wordguess.js      ← Word Guess tiles + keyboard
    memory.js         ← Memory Match card grid
components/
  GameScreen.js       ← Shared header + back button wrapper
```

---

## 🎨 Theme Colors

| Screen       | Color     |
|--------------|-----------|
| Home         | `#FFF8E7` (cream) |
| Tic-Tac-Toe  | `#FF6B6B` (coral) |
| Minesweeper  | `#6BCB77` (mint)  |
| Word Guess   | `#4D96FF` (sky)   |
| Memory Match | `#C77DFF` (purple)|

---

## 🧩 Adding Game Logic

Each game screen uses the shared `GameScreen` wrapper for the header and back button.
To add logic, open the relevant file under `app/game/` and:
1. Add `useState` for game state
2. Wire up `onPress` handlers on the grid cells / buttons
3. Render state into the UI
