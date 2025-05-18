# 🖼️ AutoWall

A simple Node.js script that automatically downloads a random high-resolution image from [Unsplash](https://source.unsplash.com) and sets it as your desktop wallpaper on GNOME (Linux). Perfect for anyone who loves keeping their desktop fresh with beautiful backgrounds — effortlessly.


[Gravação de tela de 17-05-2025 23:04:48.webm](https://github.com/user-attachments/assets/e864c16f-a699-4c15-8f3d-027f87e22ea9)


## ✨ Features

- 📸 Downloads random images  from Unsplash
- 🎨 Applies wallpaper to both light and dark GNOME themes
- 🔁 Can be integrated with a scheduler (e.g. `cron`) for automatic updates


## ⚙️ Requirements

- Node.js 18+
- Linux with GNOME (Ubuntu, Fedora, Pop!_OS, etc.)

## 📦 Installation and Configuration

1. **Clone the repository** (or download the script manually):

   ```bash
   git clone https://github.com/tiago-rodrigues1/auto-walll.git
   ```
   ```bash
   cd wallpaper-generator
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Setting up the configuration file**
   1. Remove the ".example" from `config.example.js`
   2. Set your `API_KEY` (visit [Unsplash Developers](https://unsplash.com/developers))
   3. Set your `BASE_DIR`. This is where the images will be downloaded (the project directory is recommended)
   4. Set yours `THEMES`. Fill in with things that you like. example:

        ```js
        THEMES: [
            "Space",
            "Nature",
            "Night"
        ]
        ```

4. **Runnig the AutoWall**
   ```bash
   node index.js
   ```
