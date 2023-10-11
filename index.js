const express = require('express');
const app = express();
const port = 3000;

//require routes
const messagesRouter = require('./routes/api/v1/messages');

// json body logger
app.use(express.json());
app.use("/api/v1/messages", messagesRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});