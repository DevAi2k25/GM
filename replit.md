# GamersMarket - Gaming Marketplace Platform

## Overview

GamersMarket is a full-stack e-commerce application designed as a premium marketplace for gaming gear, collectibles, and community-driven trading. The application features a modern dark theme with cyan and pink accent colors, built with React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom gaming-themed design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Development**: Hot reload with Vite middleware in development
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Database Schema
The application uses a relational database with the following main entities:
- **Users**: Authentication and profile management
- **Categories**: Product categorization with slug-based routing
- **Products**: Core marketplace items with pricing, ratings, and verification status
- **Cart Items**: Shopping cart functionality per user
- **Wishlist Items**: User wishlist management

### Authentication & Authorization
- Session-based authentication using PostgreSQL session store
- User profiles with statistics tracking (orders, reviews, spending)
- Mock authentication system for demonstration purposes

### Product Management
- Category-based product organization
- Featured products and categories
- Product search functionality
- Stock management and pricing with discount support
- Rating and review system
- Seller verification badges

### Shopping Experience
- Shopping cart with persistent storage
- Wishlist functionality
- Real-time cart updates with optimistic UI
- Toast notifications for user feedback

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with middleware for logging
3. **Data Access**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses with error handling and type safety

The application implements a clean separation between client and server with shared TypeScript types for consistency.

## External Dependencies

### UI & Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

### Development Tools
- Vite for fast development and building
- ESBuild for server-side bundling
- TypeScript for type safety across the stack

### Database & Backend
- Neon PostgreSQL serverless database
- Drizzle ORM with Zod validation
- Express.js with CORS and security middleware

## Deployment Strategy

### Development Environment
- Vite dev server with hot module replacement
- Express middleware integration for API proxy
- TypeScript compilation with path aliases
- Replit-specific development banner and error overlay

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving from Express in production
- Environment-based configuration for database connections

### File Structure
```
/client          # React frontend application
/server          # Express backend API
/shared          # Shared types and schema definitions
/migrations      # Database migration files
```

The application is designed for easy deployment on platforms like Replit with automatic database provisioning and environment variable management.