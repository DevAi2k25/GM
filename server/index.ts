import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] Response completed in ${duration}ms with status ${res.statusCode}`);
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  console.log('[Server] Starting server initialization...');
  const server = await registerRoutes(app);
  console.log('[Server] Routes registered successfully');

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error('[Error Handler]', err);
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Add catch-all route for debugging
  app.use('*', (req, res, next) => {
    console.log('[404 Handler] Not Found:', req.originalUrl);
    if (req.accepts('html')) {
      res.sendFile('index.html', { root: './client/dist' });
    } else {
      res.status(404).json({ message: 'Not Found' });
    }
  });

  if (app.get("env") === "development") {
    console.log('[Server] Setting up Vite in development mode');
    await setupVite(app, server);
  } else {
    console.log('[Server] Setting up static file serving in production mode');
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`[Server] Environment: ${process.env.NODE_ENV}`);
    console.log(`[Server] Server started successfully on port ${port}`);
    console.log(`[Server] Current working directory: ${process.cwd()}`);
    log(`serving on port ${port}`);
  });
})().catch(err => {
  console.error('[Server] Failed to start server:', err);
  process.exit(1);
});
