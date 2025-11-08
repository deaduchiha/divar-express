# Divar Express

A simple Express.js application built with TypeScript, designed as a starting point for web APIs.

## Features

- 🚀 Express.js with TypeScript
- 🔧 Hot reload development with tsx
- 📦 Bundling with tsdown
- 🛡️ Error handling middleware
- 🏥 Health check endpoint
- ⚙️ Environment configuration with dotenv

## Tech Stack

- **Runtime**: Bun
- **Framework**: Express.js v5
- **Language**: TypeScript
- **Bundler**: tsdown
- **Validation**: Zod

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd divar-express
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

The server will start on `http://localhost:8000` (or the port specified in your `.env` file).

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build the application for production
- `bun run build:watch` - Build and watch for changes
- `bun run start` - Start the production server
- `bun run typecheck` - Run TypeScript type checking

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Project Structure

```
├── src/
│   ├── index.ts          # Main application entry point
│   ├── common/           # Shared utilities
│   ├── config/           # Configuration files
│   └── modules/          # Application modules
├── dist/                 # Built application
├── package.json
├── tsconfig.json
└── tsdown.config.ts
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
