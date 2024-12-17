# Diametric Labs

A modern, responsive landing page for Diametric Labs, showcasing the Solaris AI-assisted decision-making platform.

## Overview

This website serves as the primary landing page for Diametric Labs, featuring:

-   Information about the Solaris experiment
-   Company mission and team background
-   Beta program registration
-   Dark/light mode support
-   Responsive design

## Technology Stack

-   Next.js 14
-   TypeScript
-   TailwindCSS
-   Radix UI Components
-   next-themes
-   React Icons

## Project Structure

```
├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── images/
├── components/
│   ├── about/
│   ├── contact/
│   ├── footer/
│   ├── intro/
│   ├── navbar/
│   └── ui/
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

1. Create a production build:

```bash
npm run build
```

2. Deploy the static output from the `out` directory to gh-pages branch

```bash
npm run deploy
```

## Contact

The website includes a contact section with:

-   Direct email link to hello@diametriclabs.com
-   Links to Telegram bot
-   Social media integration

## Mobile Responsiveness

The site implements:

-   Responsive navigation
-   Fluid typography using Tailwind CSS
-   Optimized images for different screen sizes
-   Mobile-first design approach
-   Smooth transitions and animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Copyright © 2024 Diametric Labs. All rights reserved.
