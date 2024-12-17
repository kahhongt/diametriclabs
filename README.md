# Diametric Labs

A modern, responsive landing page for Diametric Labs, showcasing the Solaris AI-assisted decision-making platform.

## Overview

This website serves as the primary landing page for Diametric Labs, featuring:

-   Information about the Solaris experiment
-   Company mission and team background
-   Dark/light mode support
-   Responsive design
-   Telegram bot integration

## Technology Stack

-   React 18
-   TypeScript
-   Vite
-   TailwindCSS
-   React Router
-   React Icons

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── ModeToggle.tsx
│   │   └── Navbar.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── public/
│   └── images/
├── index.html
└── package.json
```

## Setup and Development

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

1. Create a production build:

```bash
npm run build
```

2. Deploy the static output from the `dist` directory to gh-pages branch:

```bash
npm run deploy
```

## Features

### Dark Mode Support

-   Automatic system preference detection
-   Manual toggle option
-   Persistent preference storage
-   Themed UI components and images

### Mobile Responsiveness

-   Responsive navigation menu
-   Fluid typography using Tailwind CSS
-   Optimized images for different screen sizes
-   Mobile-first design approach

### Contact Options

-   Direct email link to hello@diametriclabs.com
-   Integration with Telegram bot
-   Responsive contact section

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Copyright © 2024 Diametric Labs. All rights reserved.
