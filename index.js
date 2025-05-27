const express = require("express");

// This creates an express application
const app = express();

const port = 5000;

const requestTimeLogger = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(
    `Request received at: ${currentTime} from ${req.method} to ${req.url}`
  );
  next();
};

app.use(requestTimeLogger);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
