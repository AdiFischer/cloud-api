import functions from 'firebase-functions'
import express from 'express'
import { creatUser, getAllUsers, updateUser } from './src/users.js'
const app = express()
app.use(express.json())

app.get('/users', getAllUsers)
app.post('/users', creatUser)
app.patch('/users/:uid', updateUser)

export const api = functions.https.onRequest(app)

//creat func api and directed it to our cloud
//app.get('/test', (req, res) => res.send('Our first works!'))

//match the function in firebaseConfig={.json}
//export const api = functions.https.onRequest(app)
//first api to deploy to the cloud



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// export.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
