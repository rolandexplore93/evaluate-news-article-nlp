const validUrltag = require('valid-url');
import { validURLAddress } from "./validateURL"

const handleSubmit = async (e) => {

    e.preventDefault()

    let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
    let apiKey = '2939481e539ac6dd8c369b6bb6802b71';    
    // const url = 'https://edition.cnn.com/2022/02/22/politics/biden-invasion-sanctions/index.html';
    let url = document.getElementById('name').value

    // Add Client. to checkForName to ensure I refrence checkForName through the Client library
    Client.validURLAddress(url);

    // If the url is not valid, notify the user
    if (!validUrltag.isUri(url)){
        url = "";
        console.log("Please, enter a valid URL")
        return
    }

    postEnd('http://localhost:3000/getApi', {
        baseURL: baseURL,
        urlTag: url
    }).then(data => {
        console.log(data)
        updateUI()
    })

}

// Send data from the client to the server
const postEnd = async (url = '', data = {}) => {
    console.log(data)

    const response = await fetch (url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  //body data type must be the same as Content-Type
    });
    try {
        const newWeatherData = await response.json();
        console.log(newWeatherData);
        return newWeatherData
    } catch (error) {
        console.log('error detected', error)
    }
}

// Update the UI with the data from the server
const updateUI = async () => {
    const res = await fetch('http://localhost:3000/getApi');

    try {
        const data = await res.json()
        console.log(data)
        let score = document.querySelector('#score');
        let agreement = document.querySelector('#agreement');
        let subjectivity = document.querySelector('#subjectivity');
        let confidence = document.querySelector('#confidence');
        let irony = document.querySelector('#irony');

        score.innerHTML = `Score: ${data.score_tag}`;
        agreement.innerHTML = `Agreement: ${data.agreement}`;
        subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
        confidence.innerHTML = `Confidence: ${data.confidence}`;
        irony.innerHTML = `Irony: ${data.irony}`

        return data
    } catch (error){
        console.log("error", error)
    }
}

export { handleSubmit }