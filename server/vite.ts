import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  console.log('[Vite] Setting up Vite middleware...');
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  try {
    console.log('[Vite] Creating Vite server with config:', JSON.stringify(viteConfig, null, 2));
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      customLogger: {
        ...viteLogger,
        info: (msg) => {
          console.log('[Vite Info]', msg);
          viteLogger.info(msg);
        },
        warn: (msg) => {
          console.warn('[Vite Warning]', msg);
          viteLogger.warn(msg);
        },
        error: (msg, options) => {
          console.error('[Vite Error]', msg);
          viteLogger.error(msg, options);
          process.exit(1);
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    console.log('[Vite] Server created successfully');
    app.use(vite.middlewares);
    
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      console.log(`[Vite] Handling request for: ${url}`);

      try {
        const clientTemplate = path.resolve(
          import.meta.dirname,
          "..",
          "client",
          "index.html",
        );
        console.log(`[Vite] Reading template from: ${clientTemplate}`);

        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        template = template.replace(
          `src="/src/main.tsx"`,
          `src="/src/main.tsx?v=${nanoid()}"`,
        );
        console.log('[Vite] Template loaded and processed');
        
        const page = await vite.transformIndexHtml(url, template);
        console.log('[Vite] HTML transformed successfully');
        
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        console.error('[Vite] Error processing request:', e);
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } catch (error) {
    console.error('[Vite] Failed to setup Vite:', error);
    throw error;
  }
}

export function serveStatic(app: Express) {
  console.log('[Static] Setting up static file serving...');
  const distPath = path.resolve(import.meta.dirname, "public");
  console.log(`[Static] Dist path: ${distPath}`);

  if (!fs.existsSync(distPath)) {
    console.error(`[Static] Build directory not found: ${distPath}`);
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  console.log('[Static] Setting up static middleware');
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    console.log(`[Static] Serving index.html for path: ${req.originalUrl}`);
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
