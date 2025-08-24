// instrument.mjs
import * as Sentry from "@sentry/node";
import { ENV } from "./src/config/env.js";

Sentry.init({
  dsn: ENV.SENTRY_DSN,
  environment: ENV.NODE_ENV || "development",
  tracesSampleRate: 1.0,
  includeLocalVariables: true,
  sendDefaultPii: true,

  // 👇 Express instrumentation only
  integrations: [
    Sentry.expressIntegration(),
  ],
});

export { Sentry };
