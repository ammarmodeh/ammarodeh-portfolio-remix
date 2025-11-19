// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn: "https://a190ff1efc83cd19e3192db00439e10b@o4510391112368128.ingest.de.sentry.io/4510391119315025",

  integrations: [nodeProfilingIntegration()],

  // Tracing must be enabled for profiling to work
  tracesSampleRate: 1.0,

  // REQUIRED for profiling:
  profileSessionSampleRate: 1.0, // capture 100% of profiles
  profileLifecycle: "trace", // enables profiling during active trace spans

  // Optional (safe to leave enabled)
  enableLogs: true,

  // Optional: collect user PII if you need it
  sendDefaultPii: true,
});
