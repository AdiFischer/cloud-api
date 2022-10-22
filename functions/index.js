import functions from 'firebase-functions'//1 from terminal firebase init hosting+
//firebase init functions
import express from 'express'//2
import { creatUser, getAllUsers, updateUser } from './src/users.js'
const app = express()//3
app.use(express.json())//4

app.get('/users', getAllUsers)
app.post('/users', creatUser)
app.patch('/users/:uid', updateUser)

export const api = functions.https.onRequest(app)
//**********/???
//create func api and directed it to our cloud. so db can connect to api
//first api to deploy to the cloud
//match the function in firebaseConfig={.json}

//firebase host is on the cloud and api is listening
//app.get('/test', (req, res) => res.send('Our first works!'))




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// export.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
