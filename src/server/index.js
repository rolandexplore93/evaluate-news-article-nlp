// Configure the environment variable (dotenv) to store API key
const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your API KEY is ${process.env.API_KEY}`)

// Setup an empty JS object to act as endpoint for all routes
projectData = {};

// Add configuration to use env variable
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1'
// const apikey = process.env.API_KEY;

var path = require('path');
const express = require('express');  //express to run server & routes
const cors = require("cors")     //cors for cross-origin allowance
const bodyParser = require("body-parser")   //express to use body-parser as middleware
const mockAPIResponse = require('./mockAPI.js');
const { response } = require('express');
const axios = require("axios");
// const fetch = require('node-fetch');

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get("/getApi", async (req, res) => {
    console.log(typeof req.body)
    console.log(projectData);
    res.send(projectData)
})

// const res = await fetch(baseURL + apiKey + "&url=" + url + "&lang=en")    

app.post("/getApi", async (req, res) => {
    // console.log(req.body);
    const {baseURL, urlTag} = req.body; 
    const apikey = process.env.API_KEY;
    console.log(baseURL, urlTag, apikey);
    // make an api call to MeaningCloud

    try {
        const response = await axios.get(baseURL + apikey + "&url=" + urlTag + "&lang=en");
        const allResponse = response.data;
        // console.log(allResponse.score_tag);
        projectData = {
            score_tag: allResponse.score_tag,
            agreement: allResponse.agreement,
            subjectivity: allResponse.subjectivity,
            confidence: allResponse.confidence,
            irony: allResponse.irony,
        }
        
    console.log(projectData.score_tag)

    }catch(error){
        console.log("error", error)
    }

    res.status(200).json({
        status: "success",
        message: "post request received successfully!",
    });
})

// Create a route to handle post request for new URL from the UI
// Axios to make API call from backend

// const formdata = new FormData();
// formdata.append("key", `${apikey}`);
// formdata.append("txt", "In the country of Sokovia, the Avengers – Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton – raid a Hydra outpost led by Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's experiments – twins Pietro, who has superhuman speed, and Wanda Maximoff, who can manipulate minds and project energy – and apprehend Strucker, while Stark retrieves Loki's scepter.");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...


// const respon = fetch("https://api.meaningcloud.com/sentiment-2.1", {
//             method: 'POST',
//             body: formdata,
//             redirect: 'follow'
//         }).then(response => ({
//         status: response.status, 
//         body: response.json()
//     })).then(({ status, body }) => console.log(status, body))
// .catch(error => console.log('error', error));


// app.post('/article', async (req, res) => {
//     console.log(req.body);
//     // const urlToAPi = `${BASE_URL}?key=${apikey}&url=${req.body.url}&lang=en`;
//     // console.log(urlToAPi)

//     const apiurl = 'https://api.meaningcloud.com/sentiment-2.1';

//     const formdata = new FormData();
//     formdata.append("key", `${apikey}`);
//     formdata.append("txt", req.body);
//     formdata.append("lang", "en");  // 2-letter code, like en es fr ...


//     // const response = await fetch(urlToAPi)
//     // try {
//     //     const newData = await response.json();
//     //     console.log(newData);
//     // } catch(error){
//     //     console.log('error', error);
//     // }

//     // const response = fetch("https://api.meaningcloud.com/sentiment-2.1", {
//         //     method: 'POST',
//         //     body: formdata,
//         //     redirect: 'follow'
//         // })
//     // .then(response => ({
//     //     status: response.status, 
//     //     body: response.json()
//     // }))
//     // .then(({ status, body }) => console.log(status, body))
//     // .catch(error => console.log('error', error));

//     try {
//         const response = await axios.get(apiurl, {
//             method: 'POST',
//             body: formdata,
//             redirect: 'follow'
//         });
//         const allResponse = response.data;
//         projectData = allResponse;
//         console.log(projectData)
//         res.json(response.data)
//     } catch (error){
//         console.log("error", error)
//     }
// })

//GET route to return projectData
// app.post('/article', async (req, res) => {
//     const urlToAPi = `${req.body.apiUrl}key=${apikey}&url=${req.body.urlInput}&lang=en`
//     console.log(req.body.data.apiUrl)
// });


// const handleFetchApi =  async(req, res) => {
//     // const urlToAPi = `${req.body.apiUrl}key=${apikey}&url=${req.body.urlInput}&lang=en`
//     const urlToAPi = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&url='https://edition.cnn.com/2022/02/22/politics/biden-invasion-sanctions/index.html'&lang=en`
//     // const abc = `${req.body.apiUrl}`
//     // console.log(urlToAPi)
//     // const apiKey = '3c67eb2a486191e0bf6c7872930b3799&units=metric';
//   // const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${apiKey}`;
//     const rep = await fetch (urlToAPi)

//     try {
//         const data = await rep.json();
//         console.log(data)
//         return data
//     } catch (err){
//         console.log("err", err)
//     }
// }


// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

