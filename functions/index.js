const functions = require('firebase-functions');
const server = require('../server/index.js');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.server = functions.https.onRequest(server);

