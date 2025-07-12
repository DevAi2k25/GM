# GamersMarket - Gaming Marketplace Platform

## Overview

GamersMarket is a comprehensive gaming e-commerce platform featuring 17 fully functional pages with a modern dark theme design using cyan and pink accent colors. Built with React/TypeScript frontend and Express backend, the platform includes complete shopping functionality, user management, seller tools, authentication services, and informational pages. All pages are fully responsive and optimized for desktop, tablet, and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (December 2024)

✓ Completed all 17 required pages as per project specifications
✓ Added comprehensive seller dashboard with listing management and analytics
✓ Implemented authentication verification page with email/SMS options
✓ Created authentication service page for item verification and certification
✓ Built dedicated routes page for easy navigation and testing of all features
✓ Fixed cart checkout navigation to properly link to checkout page
✓ Added "All Pages" link in header navigation for easy access to routes page
✓ All pages are fully responsive across all device sizes
✓ Dark theme with gaming aesthetic consistently applied throughout
✓ Made routes page the main homepage/landing page as requested
✓ Added 6 advanced gaming-related pages: Gaming News, Community Forums, Live Streams, Tournaments, Leaderboards, and Marketplace Analytics
✓ Updated routing system to support 23 total pages with seamless navigation

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

## Complete Page List (23 Pages)

### Advanced Gaming Features (6 New Pages)
18. **Gaming News** (`/gaming-news`) - Latest gaming news, reviews, and industry updates
19. **Community Forums** (`/community-forums`) - Discussion forums for gaming community
20. **Live Streams** (`/live-streams`) - Watch live gaming content and streams  
21. **Tournaments** (`/tournaments`) - Gaming tournaments and competitions
22. **Leaderboards** (`/leaderboards`) - Player rankings and achievements
23. **Marketplace Analytics** (`/marketplace-analytics`) - Market insights and performance metrics

## Original Page List (17 Pages)

### Main Shopping Pages
1. **Homepage** (`/`) - Featured products, trending items, promotional banners
2. **Category Listing** (`/category/:slug`) - Products by category (Headsets, Keyboards, etc.)
3. **Product Detail Page** (`/product/:id`) - Detailed product info, specs, reviews, Q&A
4. **Search Results** (`/search`) - Products based on user search queries

### User & Account Management
5. **User Profile** (`/profile`) - Account info, order history, saved items
6. **Seller Dashboard** (`/seller-dashboard`) - Listing management, sales tracking, analytics
7. **Authentication/Registration** (`/auth`) - User login, registration, password reset
8. **Authentication Verification** (`/auth-verification`) - Email/SMS verification codes

### Shopping & Checkout Flow
9. **Shopping Cart** (`/cart`) - Cart items, quantity adjustment, checkout navigation
10. **Checkout Page** (`/checkout`) - Shipping address, payment info, order confirmation
11. **Order Confirmation** (`/order-confirmation`) - Order details and tracking information

### Authentication Services
12. **Authentication Service** (`/authentication-service`) - Item verification and certification services

### Information & Legal Pages
13. **Contact Us** (`/contact`) - Support contact form and information
14. **About Us** (`/about`) - Platform information and company mission
15. **Terms and Conditions** (`/terms`) - Legal terms and conditions
16. **Privacy Policy** (`/privacy`) - Data collection and usage policies
17. **Routes Page** (`/routes`) - Navigation directory for all pages and features

### Additional
- **404 Error Page** (`/not-found`) - Custom error page for non-existent routes

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