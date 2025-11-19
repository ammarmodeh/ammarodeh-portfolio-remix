// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",

  // --- TRACING + PROFILING ---
  integrations: [
    // Required for browser tracing
    Sentry.browserTracingIntegration(),

    // Required for browser profiling
    Sentry.browserProfilingIntegration(),

    // Optional: Session Replay
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  // Capture 100% of traces (recommended for setup)
  tracesSampleRate: 1.0,

  // Enable distributed tracing for these URLs
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture 100% of profiles
  profilesSampleRate: 1.0,

  // Optional debugging
  debug: false,

  // Replay
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
});
