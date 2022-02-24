var express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 1000, // 1000ms , 1 second
  max: 1, // limit each IP to 1 requests per windowMs
  message: "too many requests!!! Please try again :(",
});

//  apply to all requests
app.use(limiter);

// Get request for our imaginary website
app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Please imagine this is a website",
  });
});

// Please ignore this for now
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3, // start blocking after 5 requests
  message:
    "Too many accounts created from this IP, please try again after an hour",
});
app.post("/create-account", createAccountLimiter, function (req, res) {
  const { body } = req;
  res.json({
    success: true,
    message: "successful post request!",
    payload: body,
  });
});

app.listen(port, () =>
  console.log(`Express-rate-limit example listening on port ${port}`)
);
