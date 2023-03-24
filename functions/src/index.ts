import './pre-start'; // Must be the first import

import * as functions from "firebase-functions";

import app from './server';
import EnvVars from './declarations/major/EnvVars';
import { NodeEnvs } from './declarations/enums';
import jetLogger from 'jet-logger';

if (EnvVars.nodeEnv === NodeEnvs.Dev) {
  const msg = ('Express server started on port: ' + EnvVars.port.toString());
  app.listen(EnvVars.port, () => jetLogger.info(msg));
}

// **** Export default **** //

export const server = functions
  .region("us-east1")
  .https.onRequest(app);
