require("./strategies/discord");
require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();
const port = 3001;
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const session = require("express-session");
const Store = require("connect-mongo")(session);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

(async () => {
  await mongoose.connect(process.env.MONGOPATH, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    keepAlive: true,
  });
  return mongoose;
})();

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    store: new Store({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.listen(port, () => console.log(`Running on port ${port}`));
