# TourHelp Backend API

Complete backend implementation for TourHelp Smart Tourist Safety Monitoring System.

## Quick Start

1. Install dependencies: `npm install`
2. Set up environment: `cp .env.example .env`
3. Configure database in `.env`
4. Run migrations: `npx prisma migrate dev --name init`
5. Generate client: `npx prisma generate`
6. Start server: `npm run dev`

## API Documentation

Visit http://localhost:5000/api-docs for complete interactive documentation.

## Key Features

- JWT authentication with role-based access control
- Real-time WebSocket communication
- PostgreSQL database with Prisma ORM
- Email and SMS notifications
- File upload handling
- Comprehensive error handling
- Rate limiting and security middleware

## Environment Variables

See `.env.example` for all required configuration options.
