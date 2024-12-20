import express from "express";
import userRouter from '../routes/users.js'
import eventRouter from '../routes/events.js'
import categoryRouter from '../routes/categories.js'
import * as Sentry from '@sentry/node';
import loginRouter from '../routes/login.js'
import log from '../middleware/logMiddleware.js'
import 'dotenv/config';
import errorHandler from '../middleware/errorHandler.js';

const app = express();

// Sentry.io
Sentry.init({
  dsn: "https://ad2c3ef9b5bbc5c6f1970f57932bdac2@o4508240574808064.ingest.de.sentry.io/4508251226112080",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json()); // middleware helper, we're going to be sending you information in a format called JSON. Please make sure you understand it and put it into the req.body object for us."

app.use(log);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/events', eventRouter);
app.use('/categories', categoryRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// The sentry error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler); // order is important, last element of the chain

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
