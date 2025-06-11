
# 🎮 Tic Tac Toe - React Native Game

![React Native](https://img.shields.io/badge/React%20Native-0.79.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-79.9%25-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📱 Overview

Welcome to **Tic Tac Toe**, a classic strategy game built with React Native! This cross-platform mobile application brings the timeless fun of tic-tac-toe to your smartphone with modern features and an intuitive user interface. 

The game offers multiple gameplay modes including Player vs Player and Player vs Computer, making it perfect for both solo practice and competitive play with friends.

## ✨ Features

### 🎯 Game Modes
- **🏠 Home Screen**: Beautiful main menu with game mode selection
- **👥 Player vs Player**: Play with friends on the same device
- **🤖 Player vs Computer**: Challenge the AI opponent
- **🎵 Audio Effects**: Immersive sound feedback for moves and wins
- **📳 Haptic Feedback**: Tactile vibrations for enhanced user experience

### 🎨 User Experience
- **🌟 Clean & Modern UI**: Polished interface with smooth animations
- **🎨 Custom Color Themes**: Predefined color schemes for visual appeal
- **📱 Cross-Platform**: Works seamlessly on both iOS and Android
- **⚡ Fast Performance**: Optimized React Native performance
- **🔄 Game Reset**: Easy restart functionality

### 🛠️ Technical Features
- **📐 TypeScript Support**: Type-safe development with 79.9% TypeScript coverage
- **🧭 Stack Navigation**: Smooth navigation between screens
- **🎯 Vector Icons**: Beautiful iconography throughout the app
- **📦 Modular Architecture**: Clean code structure with separated components

## 🏗️ Project Structure

```
tictactoe/
├── 📁 Screens/           # Game screens and components
│   ├── 🏠 Home.tsx       # Main menu screen
│   ├── 👥 uservsuser.tsx # Player vs Player game
│   └── 🤖 uservspc.tsx   # Player vs Computer game
├── 📁 src/
│   └── 📁 constants/
│       └── 🎨 colors.ts  # Color theme definitions
├── 📁 assets/
│   └── 📁 fonts/         # Custom fonts
├── 📁 android/           # Android-specific configurations
├── 📁 ios/               # iOS-specific configurations
├── 📁 __tests__/         # Test files
├── ⚙️ App.tsx            # Main app component with navigation
├── 📦 package.json       # Dependencies and scripts
├── 📋 README.md          # Project documentation
└── 🔧 Configuration files (ESLint, Prettier, etc.)
```

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have the following installed on your system:

- **📦 Node.js**: Version 18 or newer ([Download here](https://nodejs.org/))
- **☕ Java Development Kit (JDK)**: Version 17 (recommended)
- **📱 Android Studio**: For Android development
- **🍎 Xcode**: For iOS development (macOS only)
- **⚡ React Native CLI**: Global installation

### 💻 Installation

1. **📥 Clone the repository**
   ```bash
   git clone https://github.com/Hamza-ali1223/tictactoe.git
   cd tictactoe
   ```

2. **📦 Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **🔧 Setup for iOS (macOS only)**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **▶️ Run the application**

   **For Android:**
   ```bash
   npm run android
   # or
   yarn android
   ```

   **For iOS:**
   ```bash
   npm run ios
   # or
   yarn ios
   ```

### 🔧 Development Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run lint` - Run ESLint for code quality
- `npm test` - Run Jest tests

## 📦 Dependencies

### 🔥 Core Dependencies
- **⚛️ React**: 19.0.0 - UI library
- **📱 React Native**: 0.79.3 - Mobile app framework
- **🧭 React Navigation**: 7.x - Navigation system
  - `@react-navigation/native`: ^7.1.10
  - `@react-navigation/native-stack`: ^7.3.14

### 🎨 UI & UX Libraries
- **🎯 React Native Vector Icons**: ^10.2.0 - Icon library
- **📳 React Native Haptic Feedback**: ^2.3.3 - Tactile feedback
- **🔊 React Native Audio Toolkit**: ^2.0.3 - Audio effects
- **🛡️ React Native Safe Area Context**: ^5.4.1 - Safe area handling
- **📱 React Native Screens**: ^4.11.1 - Native screen optimization

### 🛠️ Development Tools
- **📘 TypeScript**: 5.0.4 - Type safety
- **🧹 ESLint**: Code linting and formatting
- **💄 Prettier**: Code formatting
- **🧪 Jest**: Testing framework
- **🔨 Babel**: JavaScript compiler

## 🎮 How to Play

### 🏠 Main Menu
1. Launch the app to see the beautiful home screen
2. Choose your preferred game mode:
   - **👥 VS User**: Play against another human player
   - **🤖 VS PC**: Challenge the computer AI

### 📝 Game Rules
- The game is played on a 3×3 grid
- Players take turns placing their marks (X or O)
- The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
- If all 9 squares are filled without a winner, the game is a draw

### 🎯 Gameplay Features
- **👆 Tap to Play**: Simply tap on any empty square to make your move
- **🔄 Auto Turn**: The game automatically switches between players
- **🏆 Win Detection**: Automatic winner detection with celebration
- **📳 Haptic Feedback**: Feel the game with vibration feedback
- **🔄 Reset Game**: Start a new game anytime

## 🔧 Configuration

### 🎨 Customizing Colors
The app uses a centralized color system located in `src/constants/colors.ts`. You can easily modify the app's appearance by updating these color values.

### 📱 Platform-Specific Setup

**Android:**
- Vector icons are automatically configured
- Haptic feedback requires device support

**iOS:**
- Font linking is handled automatically
- Haptic feedback uses iOS native feedback

## 🏗️ Architecture

### 📱 Navigation Structure
The app uses React Navigation with a stack navigator:
- **🏠 Home Screen**: Main menu with game mode selection
- **👥 VS User Screen**: Two-player local gameplay
- **🤖 VS PC Screen**: Single-player vs AI gameplay

### 🧩 Component Architecture
- **⚛️ Functional Components**: Modern React patterns with hooks
- **📘 TypeScript**: Full type safety throughout the codebase
- **🎨 Styled Components**: Modular styling approach
- **🔄 State Management**: React hooks for local state management

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **💾 Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **📤 Push to the branch** (`git push origin feature/amazing-feature`)
5. **🔄 Open a Pull Request**

### 📋 Contribution Guidelines
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🧪 Testing

Run the test suite with:
```bash
npm test
# or
yarn test
```

The project uses Jest for unit testing. Test files are located in the `__tests__/` directory.

## 📱 Device Compatibility

- **📱 Android**: Android 6.0 (API level 23) and above
- **🍎 iOS**: iOS 12.0 and above
- **📏 Screen Sizes**: Optimized for phones and tablets
- **🌐 Orientation**: Portrait and landscape support

## 🔍 Troubleshooting

### Common Issues:

**📦 Metro bundler issues:**
```bash
npx react-native start --reset-cache
```

**🔧 Build issues:**
```bash
cd android && ./gradlew clean && cd ..
# For iOS
cd ios && rm -rf build && cd ..
```

**📱 Device not detected:**
- Enable Developer Options and USB Debugging on Android
- Trust the computer on iOS device

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Hamza Ali**
- 🌐 GitHub: [@Hamza-ali1223](https://github.com/Hamza-ali1223)
- 📧 Feel free to reach out for questions or collaboration!

## 🙏 Acknowledgments

- 💙 React Native community for excellent documentation
- 🎯 Vector Icons library for beautiful iconography
- 🎵 Audio Toolkit for sound effects
- 📳 Haptic Feedback library for tactile experience
- 🧭 React Navigation for seamless navigation

---

### 🌟 Star this repo if you like it!

Made with ❤️ using React Native

---

*Last updated: June 2025*
