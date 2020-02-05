const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
const cors = require("cors");
const corsMiddleware = cors();
const eventRouter = require("./event/router");
const guestRouter = require("./guest/router");

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(eventRouter);
app.use(guestRouter);

app.listen(port, () => console.log(`App Available on port ${port}!`));
