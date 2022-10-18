import functions from 'firebase-functions'
import express from 'express'
const app = express()

//creat func api and directed it to our cloud
app.get('/test', (req, res) => res.send('Our first works!'))

//match the function in firebaseConfig={.json}
export const api = functions.https.onRequest(app)
//first api to deploy to the cloud



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
