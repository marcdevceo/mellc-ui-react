# 🧱 mellc-ui-react

**A custom React-based UI framework built with Tailwind CSS and component tokens.**  
Designed for scalability, theme flexibility, and clean component-based architecture.

---

## ✨ Features

- 💅 Customizable UI tokens (spacing, colors, fonts, etc.)
- 🧩 Reusable React components (Button, Grid, Typography, etc.)
- 🎨 TailwindCSS-based utility classes
- 📐 Responsive design baked in
- 🔌 Easy to plug into any Next.js, Vite, or CRA project
- 🔗 Can be linked locally or via GitHub without publishing to npm

---

## 📦 Installation

### 1. Add to your project (from GitHub)

```bash
npm install git+https://github.com/YOUR-USERNAME/mellc-ui-react.git
OR, use package.json:

json
Copy
Edit
"dependencies": {
  "@mellc/ui-framework": "git+https://github.com/YOUR-USERNAME/mellc-ui-react.git"
}
Then run:

bash
Copy
Edit
npm install
ℹ️ If you're developing both projects locally, consider npm link instead.

🔧 TailwindCSS Setup
In your app’s Tailwind config, include this:

js
Copy
Edit
content: [
  "./node_modules/@mellc/ui-framework/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
],
🔤 Fonts
If using custom fonts provided in the framework, be sure to:

Include @font-face declarations in your global CSS.

Use the fontTokens utility to apply consistent font-family styles to components.

🧪 Usage Example
tsx
Copy
Edit
import { Button, Title, FlexContainer } from "@mellc/ui-framework";

export default function HomePage() {
  return (
    <FlexContainer justify="center" alignItems="center" padding="lg">
      <Title>Welcome to My App</Title>
      <Button variant="primary">Get Started</Button>
    </FlexContainer>
  );
}
🔗 Local Development via npm link
If you're actively developing the UI framework alongside a project:

In mellc-ui-react/:
bash
Copy
Edit
npm link
In your project root:
bash
Copy
Edit
npm link @mellc/ui-framework
Changes will sync instantly without publishing or reinstalling!

🗃 Folder Structure
lua
Copy
Edit
mellc-ui-react/
├── components/
│   ├── button/
│   ├── containers/
│   ├── typography/
│   └── ...
├── theme/
│   ├── colors.ts
│   ├── spacing.ts
│   └── ...
├── fonts/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── package.json
🔮 Roadmap
 Component-level documentation

 Dark mode support

 Publish to npm

 Extend with Vue/Svelte compatibility

📄 License
MIT License © Managed Enterprises LLC