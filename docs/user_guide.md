# User Guide 📖

## Getting Started

### Prerequisites
-   Node.js 18+
-   npm

### Installation
```bash
npm install
```

### Development
Run the local development server:
```bash
npm run dev
```
Visit `http://localhost:3000` to view the site.

### Building for Production
```bash
npm run build
npm start
```

## Management
-   **Content**: content is managed through /admin and stored in a database using supabase. Menu items are stored in /data/menuItems.js
-   **Images**: Store in `public/assets/img`.

## Deployment
The project is configured for Vercel. Push to `main` branch to trigger a deployment.
