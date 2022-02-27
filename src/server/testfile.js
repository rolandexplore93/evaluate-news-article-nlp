const express = require("express");
// cors
const cors = require("cors");
const app = express();

app.use(cors()); // future updates might need setting up cors options
app.use(express.json());


// const port = utils.atob(process.env.PORT) ?? 5000;
// for heroku
const port = 5500;

// use routes
app.get("/api/v1/test", (request, response) => {
    response.send("Readdyyyyyy");
    console.log("yea");
});

app.post("/api/v1/test", (request, response) => {
    console.log(req.body);
    response.status(200).json({
        status: "success",
        message: "post request received successfully!",
    })
});

// start server
app.listen(port, (() => console.log(`server started on port ${port}`)));