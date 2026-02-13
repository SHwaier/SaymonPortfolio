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
-   **Content**: Currently managed via `data/*.js` files. Moving to Supabase (Database) in Phase 2.
-   **Images**: Store in `public/assets/img`.

## Deployment
The project is configured for Vercel. Push to `main` branch to trigger a deployment.
